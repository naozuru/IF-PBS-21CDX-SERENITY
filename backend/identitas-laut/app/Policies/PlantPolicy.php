<?php

namespace App\Policies;

<<<<<<< HEAD
use App\Models\User;
use App\Models\plant;
=======
use App\Models\Plant;
use App\Models\User;
>>>>>>> 2e08343bf852e2da88afbe03f49c9375642be540
use Illuminate\Auth\Access\Response;

class PlantPolicy
{
    /**
     * Determine whether the user can view any models.
     */
    public function viewAny(User $user): bool
    {
        //
    }

    /**
     * Determine whether the user can view the model.
     */
<<<<<<< HEAD
    public function view(User $user, plant $plant): bool
=======
    public function view(User $user, Plant $plant): bool
>>>>>>> 2e08343bf852e2da88afbe03f49c9375642be540
    {
        //
    }

    /**
     * Determine whether the user can create models.
     */
    public function create(User $user): bool
    {
        //
    }

    /**
     * Determine whether the user can update the model.
     */
<<<<<<< HEAD
    public function update(User $user, plant $plant): bool
=======
    public function update(User $user, Plant $plant): bool
>>>>>>> 2e08343bf852e2da88afbe03f49c9375642be540
    {
        //
    }

    /**
     * Determine whether the user can delete the model.
     */
<<<<<<< HEAD
    public function delete(User $user, plant $plant): bool
=======
    public function delete(User $user, Plant $plant): bool
>>>>>>> 2e08343bf852e2da88afbe03f49c9375642be540
    {
        //
    }

    /**
     * Determine whether the user can restore the model.
     */
<<<<<<< HEAD
    public function restore(User $user, plant $plant): bool
=======
    public function restore(User $user, Plant $plant): bool
>>>>>>> 2e08343bf852e2da88afbe03f49c9375642be540
    {
        //
    }

    /**
     * Determine whether the user can permanently delete the model.
     */
<<<<<<< HEAD
    public function forceDelete(User $user, plant $plant): bool
=======
    public function forceDelete(User $user, Plant $plant): bool
>>>>>>> 2e08343bf852e2da88afbe03f49c9375642be540
    {
        //
    }
}
