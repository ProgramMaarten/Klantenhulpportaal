<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\User;
use App\Models\Category;
use App\Models\Ticket;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Ticket>
 */
class TicketFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [

                'user_id' => User::inRandomOrder()->first()->id,
                'admin_id' => User::where('is_admin', 1)->inRandomOrder()->first()->id,
                'category_id' => Category::inRandomOrder()->first()->id,
                'title' => $this->faker->sentence,
                'content' => $this->faker->paragraph,
                'status' => $this->faker->randomElement(['In afwachting', 'In behandeling', 'Afgehandeld']),
                'created_at' => now(),
                'updated_at' => now(),

        ];
    }
}
