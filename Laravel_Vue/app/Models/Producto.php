<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;


class Producto extends Model
{
    
    static $rules = [
		'nombre' => 'required',
		'descripcion' => 'required',
		'precio' => 'required',
		'stock' => 'required',
    ];

    protected $perPage = 20;

   
    protected $fillable = ['nombre','descripcion','precio','stock'];



}