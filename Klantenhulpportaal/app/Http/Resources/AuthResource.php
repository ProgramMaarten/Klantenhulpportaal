<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class AuthResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
         'id' => $this->id,
        'name' => $this->name,
        'email' => $this->email,
        'is_admin' => $this->is_admin,
        'email_verified_at' => $this->email_verified_at,
        'created_at' => $this->created_at,
        'updated_at' => $this->updated_at,
        ];
    }
}
