<?php

namespace App\Http\Controllers;
use App\Models\Producto;
use Illuminate\Http\Request;
use DB;

class ProductoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $productos= Producto::all(['id','nombre','descripcion','precio','stock']);
        return response()->json($productos);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //$producto = Producto::create($request->post());
        $producto  = new Producto($request->input());
        $producto->save();
        return redirect('productos');
       
    }

    /**
     * Display the specified resource.
     */
    public function show(Producto $productos)
    {
        return response()->json($productos);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Producto $producto)
    {
        $producto->fill($request->post())->save;
        return response()->json([
            'producto'=>$producto
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Producto $producto)
    {
        $producto->delete();
        return response()->json([
           'mensaje'=>'Producto Eliminado'
        ]);
    }
}