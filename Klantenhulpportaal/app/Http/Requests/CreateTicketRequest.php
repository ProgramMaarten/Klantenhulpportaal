<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateTicketRequest extends FormRequest
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
        'title' =>  'required|string|max:255',
        'content' =>  'nullable|string|max:1023',
        'category_id' =>  'required|integer',
        'status' => 'required|string',
        'user_id' => 'required|integer',
        'admin_id' => 'nullable|integer',
        ];
    }
}
