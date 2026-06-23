import React from "react";
import { useGetProductsQuery } from "./productApi";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { base } from "@/app/mainApi";

export default function ProductList() {
  const { data, isLoading, isError } = useGetProductsQuery();

  if (isLoading) {
    return (
      <div className="py-10 text-center">
        Loading products...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="py-10 text-center text-red-500">
        Failed to load products
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="mb-8 text-3xl font-bold">
        Products
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data?.map((product) => (
          <Card
            key={product._id}
            className="overflow-hidden transition-all hover:shadow-xl"
          >
            <div className="aspect-square overflow-hidden bg-gray-100">
              <img
                src={`${base}/${product.image}`}
                alt={product.title}
                className="h-full w-full object-cover transition duration-300 hover:scale-105"
              />
            </div>

            <CardContent className="space-y-3 p-4">
              <div className="flex justify-between">
                <Badge>{product.category}</Badge>
                <Badge variant="secondary">
                  {product.brand}
                  
                </Badge>
              </div>

              <h2 className="line-clamp-1 text-lg font-semibold">
                {product.title}
              </h2>

              <p className="line-clamp-2 text-sm text-muted-foreground">
                {product.description}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-xl font-bold">
                  Rs. {product.price}
                </span>

                <span className="text-sm text-green-600">
                  Stock: {product.stock}
                </span>
              </div>

              <Button className="w-full">
                Add to Cart
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}