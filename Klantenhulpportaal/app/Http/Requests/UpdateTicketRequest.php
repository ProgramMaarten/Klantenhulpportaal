<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateTicketRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
        'id'=> 'required|integer',
        'user_id' => 'required|integer',
        'admin_id' => 'nullable|integer',
        'category_id' =>  'required|integer',
        'title' =>  'required|string|max:255',
        'content' =>  'nullable|string|max:1023',        
        'status' => 'required|string',
        'created_at'=> 'required|string',
        'updated_at'=> 'required|string',        
        ];
    }
}