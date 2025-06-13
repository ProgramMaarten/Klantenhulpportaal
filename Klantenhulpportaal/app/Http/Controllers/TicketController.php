<?php

namespace App\Http\Controllers;
use App\Models\Ticket;
use App\Http\Resources\TicketResource;
use App\Http\Requests\UpdateTicketRequest;
use App\Http\Requests\CreateTicketRequest;
use Illuminate\Http\Request;

class TicketController extends Controller
{
    //
    public function index()
    {
        $tickets = Ticket::all();
        return TicketResource::collection($tickets);
    }

    public function store(CreateTicketRequest $request)
    {
        $validatedData = $request->validated();
        
        Ticket::create($validatedData);

        $tickets = Ticket::all();

        return TicketResource::collection($tickets);
    }
    public function destroy(Ticket $ticket)
    {
        $ticket->delete();
    }

    public function update(UpdateTicketRequest $request, Ticket $ticket)
    {
        $validatedData = $request->validated(); // Validate the incoming data.

        $ticket->update($validatedData); // update the ticket.

        $tickets = Ticket::all();
        return TicketResource::collection($tickets);
    }

}
