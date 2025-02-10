import React from "react";
import './participateform.css'
function Participate(){
    return (
        <div>
            <p className="starting">Fill out the details of Participants</p>
            <form id="userForm" class="space-y-4" onsubmit="handleSubmit(event)">
        <div>
          <label for="name" class="block text-sm font-medium">Name</label>
          <input type="text" id="name" name="name" required class="mt-1 block w-full p-2 border rounded-md" />
        </div>
        <div>
          <label for="address" class="block text-sm font-medium">Date Of Birth</label>
          <input type="text" required class="mt-1 block w-full p-2 border rounded-md" / >
        </div>
        
        <div>
          <label for="address" class="block text-sm font-medium">Gender</label>
          <input type="text" id="gender" name="gender" required class="mt-1 block w-full p-2 border rounded-md" / >
        </div>
        <div>
          <label for="address" class="block text-sm font-medium">Marital Status</label>
          <input type="text" required class="mt-1 block w-full p-2 border rounded-md" / >
        </div>
        <div>
          <label for="address" class="block text-sm font-medium">Address</label>
          <input type="text" id="address" name="address" required class="mt-1 block w-full p-2 border rounded-md" / >
        </div>

        <div>
          <label for="phone" class="block text-sm font-medium">Phone</label>
          <input type="tel" id="phone" name="phone" required class="mt-1 block w-full p-2 border rounded-md" />
        </div>
        <div>
          <label for="email" class="block text-sm font-medium">Email</label>
          <input type="email" id="email" name="email" required class="mt-1 block w-full p-2 border rounded-md" />
        </div>
        <div>
          <label for="address" class="block text-sm font-medium">Health Status</label>
          <input type="text" required class="mt-1 block w-full p-2 border rounded-md" / >
        </div>
        <div>
          <label for="address" class="block text-sm font-medium">Employement Status</label>
          <input type="text" required class="mt-1 block w-full p-2 border rounded-md" / >
        </div>
        <div>
          <label for="address" class="block text-sm font-medium">Occupation</label>
          <input type="text" required class="mt-1 block w-full p-2 border rounded-md" / >
        </div>
        <div>
          <label for="address" class="block text-sm font-medium">Education Level</label>
          <input type="text" required class="mt-1 block w-full p-2 border rounded-md" / >
        </div>
        <div>
          <label for="address" class="block text-sm font-medium">Race</label>
          <input type="text" required class="mt-1 block w-full p-2 border rounded-md" / >
        </div>
        <div>
          <label for="address" class="block text-sm font-medium">Nationality</label>
          <input type="text" required class="mt-1 block w-full p-2 border rounded-md" / >
        </div>
        <div>
          <label for="address" class="block text-sm font-medium">Primary Language</label>
          <input type="text" required class="mt-1 block w-full p-2 border rounded-md" / >
        </div>

        <button type="submit" class="button">Submit</button>
      </form>
        </div>
    );
}

export default Participate;