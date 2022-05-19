import { PhotographIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import React from "react";
import useCreateBook from "../../api-hooks/use-create-book";
import useForm from "../../hooks/use-form";
import { BookType } from "../../types/book-type";
import Button from "../atoms/button";
import Form from "../atoms/form";
import TextInput from "../atoms/text-input";
import WebPage from "../atoms/webpage";
import SideMenu from "../molecules/side-menu";

export interface BookFormScreenProps {
  initialValues?: BookType;
}
const BookFormScreen: React.FC<BookFormScreenProps> = ({ initialValues }) => {
  const router = useRouter();
  const { fetch } = useCreateBook();
  const { getValue, setValue, getError, submit } = useForm<BookType>({
    initialValues,
    onSubmit: (values: BookType) => {
      fetch({
        ...values!,
        book: values,
      });
      router.push("/home");
    },
  });
  return (
    <WebPage title="Adicionar Livro" className="w-full h-full flex ">
      <div className="w-full max-w-[15rem]">
        <SideMenu />
      </div>
      <div className="flex flex-col w-full px-8 ">
        <h1 className="text-medium text-indigo-700 text-3xl pt-12">
          Adicionar Livro
        </h1>
        <div className="w-full h-full px-10 bg-zinc-200 rounded-3xl max-w-[1220px] max-h-[700px] mt-8 space-y-6">
          <div
            className="w-full border-dashed border-2  border-zinc-400 hover:border-collapse hover:border-indigo-600 max-h-[180px] h-full mt-10 flex flex-col items-center justify-center rounded-2xl cursor-pointer group "
            onClick={() => {}}
          >
            <PhotographIcon className="w-20 h-20 text-zinc-400 opacity-50 group-hover:text-gray-900" />
            <span className="text-center text-gray-500 opacity-80 group-hover:text-gray-900">
              Clique para adicionar a <br />
              imagem de capa
            </span>
          </div>
          <div className="w-full px-10">
            <Form onSubmit={submit}>
              <TextInput
                type="text"
                rows={1}
                value={getValue("title")}
                onChange={(value) => setValue("title", value)}
                placeholder="Digite o título do livro"
                className="w-full bg-transparent  border-2 border-zinc-400 focus:border-indigo-700  rounded-2xl text-indigo-900  hover:border-indigo-700 "
              />
              <TextInput
                type="text"
                rows={5}
                value={getValue("description")}
                onChange={(value) => setValue("description", value)}
                placeholder="Digite a descrição do livro"
                className="w-full min-h-[100px] bg-transparent resize-none  border-2 border-zinc-400 focus:border-indigo-700 hover:border-indigo-700 rounded-2xl text-indigo-900    scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
              />
              <div className="flex w-full justify-between space-x-6 ">
                <TextInput
                  type="text"
                  rows={2}
                  value={getValue("author")}
                  onChange={(value) => setValue("author", value)}
                  placeholder="Autor"
                  className="w-full min-h-[60px]  rounded-lg bg-transparent  border-2 border-zinc-400 focus:border-indigo-700 hover:border-indigo-700 text-indigo-900 placeholder:text-center"
                />
                <TextInput
                  type="text"
                  value={getValue("cdd")}
                  onChange={(value) => setValue("cdd", value)}
                  placeholder="CDU "
                  className="w-full min-h-[60px]  rounded-lg bg-transparent  border-2 border-zinc-400 focus:border-indigo-700 hover:border-indigo-700 text-indigo-900 placeholder:text-center"
                />
                <TextInput
                  type="text"
                  value={getValue("cdu")}
                  onChange={(value) => setValue("cdu", value)}
                  placeholder="CDD"
                  className="w-full min-h-[40px]  rounded-lg bg-transparent  border-2 border-zinc-400 focus:border-indigo-700 hover:border-indigo-700 text-indigo-900 placeholder:text-center"
                />
              </div>
              <div className="flex w-full justify-between space-x-6 ">
                <TextInput
                  type="text"
                  value={getValue("edition")}
                  onChange={(value) => setValue("edition", value)}
                  placeholder="Edição"
                  className="w-full min-h-[60px]  rounded-lg bg-transparent  border-2 border-zinc-400 focus:border-indigo-700 hover:border-indigo-700 text-indigo-900 placeholder:text-center"
                />
                <TextInput
                  type="text"
                  value={getValue("coverUrl")}
                  onChange={(value) => setValue("coverUrl", value)}
                  placeholder="URL da capa"
                  className="w-full min-h-[60px]  rounded-lg bg-transparent  border-2 border-zinc-400 focus:border-indigo-700 hover:border-indigo-700 text-indigo-900 placeholder:text-center"
                />
                <TextInput
                  type="text"
                  value={getValue("coverAlt")}
                  onChange={(value) => setValue("coverAlt", value)}
                  placeholder="Nome da capa"
                  className="w-full min-h-[60px]  rounded-lg bg-transparent  border-2 border-zinc-400 focus:border-indigo-700  hover:border-indigo-700 text-indigo-900 placeholder:text-center"
                />
              </div>
              <div className="flex flex-1 justify-end mt-6">
                <Button
                  type="submit"
                  className="w-[170px] h-[50px] bg-indigo-700 rounded-2xl text-sm text-white flex items-center justify-center"
                >
                  Salvar
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </WebPage>
  );
};

export default BookFormScreen;
