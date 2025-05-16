<?php

namespace App\Http\Controllers;
use App\Models\Ticket;
use App\Http\Resources\TicketResource;
use App\Http\Requests\TicketRequest;
use Illuminate\Http\Request;

class TicketController extends Controller
{
    //
    public function index()
    {
        $tickets = Ticket::orderBy('created_at', 'desc')->get();
        return TicketResource::collection($tickets);
    }

    public function store(TicketRequest $request)
    {
        $validatedData = $request->validated();

        Ticket::create($validatedData);

        $tickets = Ticket::orderBy('created_at', 'desc')->get();

        return TicketResource::collection($tickets);
    }
    public function destroy(Ticket $ticket)
    {
        $ticket->delete();
    }

    public function update(TicketRequest $request, Ticket $ticket)
    {
        $validatedData = $request->validated(); // Validate the incoming data.

        $ticket->update($validatedData); // update the ticket.

        $tickets = Ticket::orderBy('created_at', 'desc')->get();
        return TicketResource::collection($tickets);
    }

}
