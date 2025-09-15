import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-primary">
          404 - Página Não Encontrada
        </h1>
        <p className="text-lg mb-6">
          A página que você está procurando não existe ou foi removida.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={"/"}
            className=" flex items-center justify-center px-4 py-2 bg-primary text-white rounded-md hover:bg:primary/80 transition-colors"
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            Voltar para a Página Inicial
          </Link>
        </div>
      </div>
      <div className="mt-12 text-center">
        <p className="text-sm text-muted-foreground">
          {" "}
          Se acredita que isso é um erro, por favor entre em contato com o time
          de suporte.
        </p>
      </div>
    </div>
  );
}

export default NotFoundPage;
