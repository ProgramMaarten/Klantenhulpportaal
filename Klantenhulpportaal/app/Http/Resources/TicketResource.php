<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TicketResource extends JsonResource
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
        'user_id' =>  $this->user_id,
        'admin_id' =>  $this->admin_id,
        'category_id' =>  $this->category_id,
        'title' =>  $this->title,
        'content' =>  $this->content,
        'status' =>  $this->status,
        'created_at' => $this->created_at,
        'updated_at' => $this->updated_at,
        ];
    }
}