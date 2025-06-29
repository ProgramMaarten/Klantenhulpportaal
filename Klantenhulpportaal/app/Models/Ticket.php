<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
class Ticket extends Model
{
    
    use HasFactory;
    //
    protected $fillable = [
           'title',
           'content',
           'category_id',
           'status',
           'user_id',
           'admin_id'
       ];
    //
    public function user() {
        return $this->belongsTo(User::class);
    }
    public function category() {
        return $this->belongsTo(Category::class);
    }
    public function notes() {
        return $this->hasMany(Note::class);
    }
    public function reactions() {
        return $this->hasMany(Reaction::class);
    }

}
