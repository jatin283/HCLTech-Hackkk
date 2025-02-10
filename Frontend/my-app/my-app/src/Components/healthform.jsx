import React from "react";
import './healthform.css'
function Health(){
    return (
        <div>
            <p className="starting">Fill out the details of health</p>
            <form id="userForm" class="space-y-4" onsubmit="handleSubmit(event)">
        <div>
          <label for="name" class="block text-sm font-medium">Blood Pressure</label>
          <input type="text" id="name" name="name" required class="mt-1 block w-full p-2 border rounded-md" />
        </div>
        <div>
          <label for="address" class="block text-sm font-medium">Heart Rate</label>
          <input type="text" required class="mt-1 block w-full p-2 border rounded-md" / >
        </div>
        
        <div>
          <label for="address" class="block text-sm font-medium">Respiratory Rate</label>
          <input type="text" required class="mt-1 block w-full p-2 border rounded-md" / >
        </div>
        <div>
          <label for="address" class="block text-sm font-medium">Body Tempreture</label>
          <input type="text" required class="mt-1 block w-full p-2 border rounded-md" / >
        </div>
        <div>
          <label for="address" class="block text-sm font-medium">Oxygen Saturation</label>
          <input type="text" id="address" name="address" required class="mt-1 block w-full p-2 border rounded-md" / >
        </div>

        <div>
          <label for="phone" class="block text-sm font-medium">Weight</label>
          <input required class="mt-1 block w-full p-2 border rounded-md" />
        </div>
        <div>
          <label for="email" class="block text-sm font-medium">Height</label>
          <input required class="mt-1 block w-full p-2 border rounded-md" />
        </div>
        <div>
          <label for="address" class="block text-sm font-medium">ECG</label>
          <input type="text" required class="mt-1 block w-full p-2 border rounded-md" / >
        </div>
        <div>
          <label for="address" class="block text-sm font-medium">Blood Glucose</label>
          <input type="text" required class="mt-1 block w-full p-2 border rounded-md" / >
        </div>
        <div>
          <label for="address" class="block text-sm font-medium">Urine Output</label>
          <input type="text" required class="mt-1 block w-full p-2 border rounded-md" / >
        </div>

        <button type="submit" class="button">Submit</button>
      </form>
        </div>
    );
}

export default Health;