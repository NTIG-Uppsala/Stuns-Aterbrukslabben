"use client";

import { Controller, useForm } from "react-hook-form";
import Link from "next/link";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

import municipalities from "@/data/municipalities.json";

import CategoryPicker from "./category-picker";
import createPost from "../utils/create-post";
import DatePicker from "./date-picker";
import MunicipalityPicker from "./municipality-picker";
import PostTypeRadioButton from "./post-type-radio-button";

interface CreatePostComponentProps {
  firstName: string;
  lastName: string;
  email: string;
}

interface FormInputs {
  postTypeRadioButton: string;
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
}: CreatePostComponentProps) {
  const {
    control,
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormInputs>();

  const router = useRouter();

  const categoryList = ["förbrukningsvara", "instrument/maskin", "inventarie"];

  const onSubmit = async (data: FormInputs) => {
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
  };

  return (
    <div className="bg-secondary mx-auto md:p-6 p-3 md:w-[600px] w-[360px] mt-20 rounded-2xl">
      <form className="flex flex-col gap-y-5" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-center md:text-2xl text-xl ">SKAPA ETT INLÄGG</h1>
        <Controller
          name="postTypeRadioButton"
          control={control}
          rules={{ required: true }}
          defaultValue="Erbjuds"
          render={({ field: { onChange, value } }) => (
            <PostTypeRadioButton postType={value} setPostType={onChange} />
          )}
        />

        <div className="flex md:gap-x-8 gap-x-4 justify-between">
          <div className="flex flex-col w-full">
            <label className="font-medium md:text-base text-sm">Förnamn</label>
            <input
              {...register("firstName", { required: true })}
              className="bg-primary w-full md:text-base text-sm px-2 py-1 rounded-sm"
              value={firstName}
              readOnly
            />
          </div>
          <div className="flex flex-col w-full">
            <label className="font-medium md:text-base text-sm">
              Efternamn
            </label>
            <input
              {...register("lastName", { required: true })}
              className="bg-primary w-full md:text-base text-sm px-2 py-1 rounded-sm"
              value={lastName}
              placeholder="hej"
              readOnly
            />
          </div>
        </div>
        <div className="flex w-full flex-col">
          <label className="font-medium md:text-base text-sm">Mejladress</label>
          <input
            {...register("email", { required: true })}
            type="email"
            className="bg-primary w-full md:text-base text-sm px-2 py-1 rounded-sm"
            value={email}
            readOnly
          />
        </div>
        <div className="flex w-full flex-col">
          <label className="font-medium md:text-base text-sm">Titel</label>
          <input
            {...register("title", {
              required: "Titel krävs",
              maxLength: { value: 40, message: "Max 40 tecken" },
            })}
            className="bg-primary w-full md:text-base text-sm bg-opacity-40 px-2 py-1 rounded-sm"
            placeholder="Skriv titel här..."
          />
          {errors.title && (
            <p className="text-red-500 md:text-base text-sm" role="alert">
              {errors.title.message}
            </p>
          )}
        </div>
        <div className="flex w-full flex-col">
          <label className="font-medium md:text-base text-sm">
            Beskrivning
          </label>
          <textarea
            {...register("description", {
              required: "Beskrivning krävs",
              maxLength: { value: 2000, message: "Max 2000 tecken" },
            })}
            className="resize-none w-full h-32 bg-primary md:text-base text-sm bg-opacity-40 px-2 py-1 rounded-sm"
            placeholder="Skriv beskrivning här..."
          ></textarea>
          {errors.description && (
            <p className="text-red-500 md:text-base text-sm" role="alert">
              {errors.description.message}
            </p>
          )}
        </div>
        <div className="flex flex-col w-full">
          <label className="font-medium md:text-base text-sm"> Kategori </label>
          <Controller
            name="categoryPicker"
            control={control}
            rules={{ required: "Kategori krävs" }}
            render={({ field: { onChange, value } }) => (
              <CategoryPicker
                category={value}
                setCategory={onChange}
                list={categoryList}
              />
            )}
          />
          {errors.categoryPicker && (
            <p className="text-red-500 md:text-base text-sm" role="alert">
              {errors.categoryPicker.message}
            </p>
          )}
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col">
            <label className="font-medium md:text-base text-sm">Kommun</label>
            <Controller
              name="municipalityPicker"
              control={control}
              rules={{ required: "Kommun krävs" }}
              render={({ field: { onChange, value } }) => (
                <MunicipalityPicker
                  municipality={value}
                  setMunicipality={onChange}
                  list={municipalities}
                />
              )}
            />
            {errors.municipalityPicker && (
              <p className="text-red-500 md:text-base text-sm" role="alert">
                {errors.municipalityPicker.message}
              </p>
            )}
          </div>
          <div className="flex flex-col">
            <label className="font-medium md:text-base text-sm">
              Slutdatum (frivilligt)
            </label>
            <Controller
              name="datePicker"
              control={control}
              render={({ field: { onChange, value } }) => (
                <DatePicker date={value} setDate={onChange} />
              )}
            />
          </div>
        </div>
        <div className="flex justify-between pt-5">
          <Link
            href="/"
            className="bg-primary py-1 md:px-4 px-3 md:text-base text-sm rounded-sm"
          >
            Avbryt
          </Link>
          <input
            className="bg-primary py-1 md:px-4 px-3 rounded-sm md:text-base text-sm cursor-pointer"
            type="submit"
            value="Skapa"
          />
        </div>
      </form>
    </div>
  );
}
