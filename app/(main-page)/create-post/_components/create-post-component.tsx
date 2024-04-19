"use client";

import { Controller, useForm, useWatch } from "react-hook-form";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useState } from "react";

import municipalities from "@/data/municipalities.json";

import CancelFormAlertDialog from "./cancel-form-alert-dialog";
import CategoryPicker from "./category-picker";
import createPost from "../utils/create-post";
import CreatePostAlertDialog from "./create-post-alert-dialog";
import DatePicker from "./date-picker";
import FormErrorParagraph from "./form-error-paragraph";
import FormHint from "./form-hint";
import FormLabel from "./form-label";
import MunicipalityPicker from "./municipality-picker";
import PostComponent from "../../post/_components/post-component";
import PostPreviewForMobile from "./post-preview-for-mobile";
import PostTypePicker from "./post-type-picker";

interface CreatePostComponentProps {
  firstName: string;
  lastName: string;
  email: string;
  userId: string;
}

interface FormInputs {
  postTypePicker: string;
  firstName: string;
  lastName: string;
  email: string;
  title: string;
  description: string;
  categoryPicker: string;
  municipalityPicker: string;
  datePicker: Date;
}

export default function CreatePostComponent({
  firstName,
  lastName,
  email,
  userId,
}: CreatePostComponentProps) {
  const {
    control,
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormInputs>();

  // Watches the form inputs so that they can be used on the post preview
  const formData = useWatch({ control });

  const postData = {
    id: 0,
    userId: userId,
    title: formData.title || "Titel",
    description: formData.description || "Beskrivning",
    postType: formData.postTypePicker || "Erbjuds",
    category: formData.categoryPicker || "",
    location: formData.municipalityPicker || "",
    imageThumbUrl: null,
    imageFullUrl: null,
    createdAt: new Date(),
    expiresAt: formData.datePicker || new Date(),
    hasCustomExpirationDate: formData.datePicker != undefined,
  };

  const router = useRouter();

  const fullName = firstName + " " + lastName;

  const categoryList = ["förbrukningsvara", "instrument/maskin", "inventarie"];

  // UseState to prevent multiple successful submissions of the form
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data: FormInputs) => {
    setIsSubmitting(true);
    const result = await createPost({ data });
    if (result && result.error) {
      toast.error(result.error);
    } else if (result && result.data) {
      router.push("/");
      router.refresh();
      toast.success(result.data);
    } else {
      toast.error("Något gick fel");
    }
    setIsSubmitting(false);
  };

  return (
    <div className="flex flex-wrap justify-center gap-x-20 md:gap-y-6 gap-y-3 max-w-screen-xl mx-auto mt-10">
      <div className="bg-secondary md:p-6 p-3 md:w-[600px] w-[360px] rounded-2xl">
        <form
          id="create-post-form"
          className="flex flex-col gap-y-5"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className="text-center md:text-3xl text-xl ">Skapa ett inlägg</h1>
          <Controller
            name="postTypePicker"
            control={control}
            rules={{ required: true }}
            defaultValue="Erbjuds"
            render={({ field: { onChange, value } }) => (
              <PostTypePicker currentPostType={value} setPostType={onChange} />
            )}
          />
          <div className="flex md:gap-x-8 gap-x-4 justify-between">
            <div className="flex flex-col w-full">
              <FormLabel content="Förnamn" />
              <fieldset disabled>
                <input
                  {...register("firstName", { required: "Förnamn saknas" })}
                  className="bg-primary w-full md:text-base text-sm px-2 py-1 rounded-sm"
                  value={firstName}
                />
              </fieldset>
              {errors.firstName?.message && (
                <FormErrorParagraph content={errors.firstName.message} />
              )}
            </div>
            <div className="flex flex-col w-full">
              <div className="flex justify-between">
                <FormLabel content="Efternamn" />
                <FormHint content="Förnamn, efternamn och mejladress kan ändras via din profilsida" />
              </div>
              <fieldset disabled>
                <input
                  {...register("lastName", { required: "Efternamn saknas" })}
                  className="bg-primary w-full md:text-base text-sm px-2 py-1 rounded-sm"
                  value={lastName}
                  readOnly
                />
              </fieldset>
              {errors.lastName?.message && (
                <FormErrorParagraph content={errors.lastName.message} />
              )}
            </div>
          </div>
          <div className="flex w-full flex-col">
            <FormLabel content="Mejladress" />
            <fieldset disabled>
              <input
                {...register("email", { required: "Mejladress saknas" })}
                type="email"
                className="bg-primary w-full md:text-base text-sm px-2 py-1 rounded-sm"
                value={email}
                readOnly
              />
            </fieldset>
            {errors.email?.message && (
              <FormErrorParagraph content={errors.email.message} />
            )}
          </div>
          <div className="flex w-full flex-col">
            <div className="flex justify-between">
              <FormLabel content="Titel" />
              <FormHint content="Max 40 tecken. Inkludera aldrig personuppgifter av något slag." />
            </div>
            <input
              {...register("title", {
                required: "Titel saknas",
                maxLength: { value: 40, message: "Max 40 tecken" },
                validate: {
                  emailValidation: (value) =>
                    value.match(/[\w-\.]+@([\w-]+\.)+[\w-]{2,4}/g) == null ||
                    "Du får inte ha en mejladress i titeln",
                  phoneValidation: (value) =>
                    value.match(
                      /[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}/
                    ) == null || "Du får inte ha ett telefonnummer i titeln",
                },
              })}
              className="bg-primary w-full md:text-base text-sm bg-opacity-40 px-2 py-1 rounded-sm"
              placeholder="Skriv titel här..."
            />
            {errors.title?.message && (
              <FormErrorParagraph content={errors.title.message} />
            )}
          </div>

          <div className="flex w-full flex-col">
            <div className="flex justify-between">
              <FormLabel content="Beskrivning" />
              <FormHint content="Max 2000 tecken. Inkludera aldrig personuppgifter av något slag." />
            </div>
            <textarea
              {...register("description", {
                required: "Beskrivning saknas",
                maxLength: { value: 2000, message: "Max 2000 tecken" },
                validate: {
                  emailValidation: (value) =>
                    value.match(/[\w-\.]+@([\w-]+\.)+[\w-]{2,4}/g) == null ||
                    "Du får inte ha en mejladress i beskrivningen",
                  phoneValidation: (value) =>
                    value.match(
                      /[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}/
                    ) == null ||
                    "Du får inte ha ett telefonnummer i beskrivningen",
                },
              })}
              className="resize-none w-full h-32 bg-primary md:text-base text-sm bg-opacity-40 px-2 py-1 rounded-sm"
              placeholder="Skriv beskrivning här..."
            ></textarea>
            {errors.description?.message && (
              <FormErrorParagraph content={errors.description.message} />
            )}
          </div>
          <div className="flex flex-col w-full">
            <div className="flex justify-between">
              <FormLabel content="Kategori" />
              <FormHint content="Välj den kategori som bäst överensstämmer med produkten" />
            </div>
            <Controller
              name="categoryPicker"
              control={control}
              rules={{ required: "Kategori ej vald" }}
              render={({ field: { onChange, value } }) => (
                <CategoryPicker
                  currentCategory={value}
                  setCurrentCategory={onChange}
                  Itemslist={categoryList}
                />
              )}
            />
            {errors.categoryPicker?.message && (
              <FormErrorParagraph content={errors.categoryPicker.message} />
            )}
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col">
              <div className="flex justify-between">
                <FormLabel content="Kommun" />
                <FormHint content="Välj den kommun där produkten kan hämtas/överlämnas" />
              </div>
              <Controller
                name="municipalityPicker"
                control={control}
                rules={{ required: "Kommun ej vald" }}
                render={({ field: { onChange, value } }) => (
                  <MunicipalityPicker
                    currentMunicipality={value}
                    setCurrentMunicipality={onChange}
                    itemsList={municipalities}
                  />
                )}
              />
              {errors.municipalityPicker?.message && (
                <FormErrorParagraph
                  content={errors.municipalityPicker.message}
                />
              )}
            </div>
            <div className="flex flex-col">
              <div className="flex justify-between">
                <FormLabel content="Slutdatum (frivilligt)" />
                <FormHint content="Ange sista datum då inlägget är aktuellt. Om ej ifylld får du en påminnelse efter sex månader." />
              </div>
              <Controller
                name="datePicker"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <DatePicker date={value} setDate={onChange} />
                )}
              />
            </div>
          </div>
          <div className="flex justify-between mt-5">
            <PostPreviewForMobile
              postData={postData}
              email={email}
              fullName={fullName}
            />
            <div className="flex w-full justify-end md:gap-x-5 gap-x-2">
              <CancelFormAlertDialog />
              <CreatePostAlertDialog isSubmitting={isSubmitting} />
            </div>
          </div>
        </form>
      </div>
      <div className="w-[600px] md:block hidden">
        <PostComponent
          postData={postData}
          email={email}
          fullName={fullName}
          isPreview={true}
        />
      </div>
    </div>
  );
}
