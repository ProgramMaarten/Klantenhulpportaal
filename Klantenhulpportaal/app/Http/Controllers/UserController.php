<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Http\Resources\UserResource;
use App\Http\Requests\UserRequest;

class UserController extends Controller
{
    //
    public function index()
    {
        $users = User::orderBy('created_at', 'desc')->get();
        return UserResource::collection($users);
    }

    public function store(UserRequest $request)
    {
        $validatedData = $request->validated();

        User::create($validatedData);

        $users = User::orderBy('created_at', 'desc')->get();

        return UserResource::collection($users);
    }
    public function destroy(User $user)
    {
        $user->delete();
    }

    public function update(UserRequest $request, User $user)
    {
        $validatedData = $request->validated(); // Validate the incoming data.

        $user->update($validatedData); // update the user.

        $users = User::orderBy('created_at', 'desc')->get();
        return UserResource::collection($users);
    }
}
