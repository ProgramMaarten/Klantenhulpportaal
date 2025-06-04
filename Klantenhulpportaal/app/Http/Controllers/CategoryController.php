<?php

namespace App\Http\Controllers;
use App\Models\Category;
use App\Http\Resources\CategoryResource;
use App\Http\Requests\CategoryRequest;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    //
    public function index()
    {
        $categories = Category::all();
        return CategoryResource::collection($categories);
    }

    public function store(CategoryRequest $request)
    {
        $validatedData = $request->validated();

        Category::create($validatedData);

        $categories = Category::all();

        return CategoryResource::collection($categories);
    }
    public function destroy(Category $category)
    {
        $category->delete();
    }

    public function update(CategoryRequest $request, Category $category)
    {
        $validatedData = $request->validated(); // Validate the incoming data.

        $category->update($validatedData); // update the category.

        $categories = Category::all();
        return CategoryResource::collection($categories);
    }

}
