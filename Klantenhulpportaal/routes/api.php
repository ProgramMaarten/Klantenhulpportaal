<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\TicketController;

Route::post('/login',[LoginController::class, 'authenticate']);
Route::get('/me',[LoginController::class, 'me'])->middleware('auth:sanctum');
Route::post('/logout', [LoginController::class, 'logout']);
Route::get('/check',[LoginController::class, 'check'])->middleware('auth:sanctum');



Route::get('/users', [UserController::class, 'index'])->middleware('auth:sanctum');
Route::post('/users', [UserController::class, 'store']);
Route::delete('/users/{user}', [UserController::class, 'destroy']);
Route::put('/users/{user}', [UserController::class, 'update']);

Route::get('/categories', [CategoryController::class, 'index']);
Route::post('/categories', [CategoryController::class, 'store']);
Route::delete('/categories/{category}', [CategoryController::class, 'destroy']);
Route::put('/categories/{category}', [CategoryController::class, 'update']);

Route::get('/tickets', [TicketController::class, 'index']);
Route::get('/tickets/{ticket}', [TicketController::class, 'show']);
Route::post('/tickets', [TicketController::class, 'store']);
Route::delete('/tickets/{ticket}', [TicketController::class, 'destroy']);
Route::put('/tickets/{ticket}', [TicketController::class, 'update']);

