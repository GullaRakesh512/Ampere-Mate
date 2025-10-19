Here is a breakdown of the logic for each feature, explaining how it likely works to get from the inputs to the output.

1. ⚡ Charge Time Calculator
How the Logic Works: This is a simple rate calculation. The logic finds out how much energy (in kWh) you need to add to the battery and then divides that by the charger's speed (in kW).

Calculate Energy Needed:

It first finds the percentage of the battery you need to fill: Charge % Needed = Target Charge % - Current Charge % (e.g., 80% - 20% = 60%)

It converts this percentage to a decimal (60% = 0.60).

It calculates the energy in kWh: Energy Needed (kWh) = Battery Capacity (kWh) * (Charge % Needed / 100) (e.g., 40.5 kWh * 0.60 = 24.3 kWh)

Calculate Time:

It divides the energy needed by the charger's power: Time (hours) = Energy Needed (kWh) / Charger Power (kW) (e.g., 24.3 kWh / 7.2 kW = 3.375 hours)

Format Output:

It takes the decimal result (3.375) and converts it to hours and minutes.

Hours = 3

Minutes = 0.375 * 60 = 22.5

Output: 3 hours and 23 minutes (rounded).

2. 💰 Cost Calculator
How the Logic Works: This feature calculates the cost per kilometer for both vehicles and then finds the difference.

Calculate EV Cost per km:

It first converts the EV's efficiency from Wh/km to kWh/km by dividing by 1000. (e.g., 160 Wh/km = 0.160 kWh/km)

It then multiplies this by the electricity cost. EV Cost per km = (Efficiency / 1000) * Electricity Cost per kWh (e.g., 0.160 kWh/km * $0.15/kWh = $0.024 per km)

Calculate Petrol Cost per km:

It divides the price of petrol by the car's mileage. Petrol Cost per km = Petrol Price per Litre / Mileage (km/L) (e.g., $1.80/L / 15 km/L = $0.12 per km)

Calculate Savings:

It subtracts the EV cost from the petrol cost. Savings per km = Petrol Cost per km - EV Cost per km (e.g., $0.12 - $0.024 = $0.096 savings per km)

3. 🛣️ Trip Log
How the Logic Works: This is essentially the reverse of the cost calculator. You provide the distance and energy used (via battery %), and it calculates the efficiency.

Calculate Energy Used:

It finds the percentage of the battery used: % Used = Starting Charge % - Ending Charge % (e.g., 90% - 70% = 20%)

It converts this to kWh: Energy Used (kWh) = Battery Capacity (kWh) * (% Used / 100) (e.g., 40.5 kWh * 0.20 = 8.1 kWh)

Calculate Efficiency (Wh/km):

It divides the energy used by the distance to get kWh/km. Efficiency (kWh/km) = Energy Used (kWh) / Distance Traveled (km) (e.g., 8.1 kWh / 50 km = 0.162 kWh/km)

It converts this to Wh/km by multiplying by 1000. Efficiency (Wh/km) = 0.162 * 1000 = 162 Wh/km

4. 🏆 Battery Health Monitor
How the Logic Works: This is a simple percentage comparison to find the "State of Health" (SoH).

Calculate Health Percentage:

It divides the battery's current full capacity by its original capacity. Health % = (Current Battery Capacity / Original Battery Capacity) * 100 (e.g., (38 kWh / 40.5 kWh) * 100 = 93.8%)

Determine Status:

It uses a simple if-else block to assign a status based on the result:

if Health % > 95%: Status = "Excellent"

if Health % > 85%: Status = "Good"

if Health % > 70%: Status = "Fair"

else: Status = "Degraded"

Log History:

When you save, it stores an object like {"date": "2025-10-19", "health": 93.8} in the device's local storage and displays all saved entries as a list.

5. 📖 Glossary
How the Logic Works: This is the simplest feature. It is not a calculator.

The app has a pre-written list (an array) of terms and their definitions stored in the code.

This feature simply displays that list, perhaps with a search bar that filters the list based on what you type.

6. 🏠 Installer Cost Estimator
How the Logic Works: This is a rules-based estimator, not a precise formula. It uses base prices and multipliers.

Get Base Cost:

The app has an internal price list for each charger type (e.g., 3.3kW = $400, 7.2kW = $600, 22kW = $1000).

It selects the base cost based on your "Charger Type" input.

Add Cable Cost:

It has an internal price for a high-voltage cable per meter (e.g., $15/meter).

Cable Cost = Cable Length (meters) * $15

Calculate Total & Range:

Estimated Cost = Base Cost + Cable Cost

Since this is an estimate, the app doesn't show this exact number. It likely applies a variance (e.g., ± 15%) to create the final range.

Min Cost = Estimated Cost * 0.85

Max Cost = Estimated Cost * 1.15

Output: "$[Min Cost] - $[Max Cost]"

7. ❄️ Pre-Heat/Pre-Cooling Cost
How the Logic Works: This is a simple cost calculation based on a fixed power assumption.

Get Time in Hours:

It converts your input from minutes to hours. Time (hours) = Pre-conditioning Time (minutes) / 60 (e.g., 15 minutes / 60 = 0.25 hours)

Calculate Energy Used:

It uses its hard-coded assumption of 2.5 kW. Energy Used (kWh) = Power (kW) * Time (hours) (e.g., 2.5 kW * 0.25 h = 0.625 kWh)

Calculate Cost:

It multiplies the energy used by your electricity price. Session Cost = Energy Used (kWh) * Electricity Cost per kWh (e.g., 0.625 kWh * $0.15/kWh = $0.09375, or ~9.4 cents)

8. 🔧 Tyre Log
How the Logic Works: This feature works with date and time logic, all stored locally.

Logging:

When you tap the "log" button, the app saves the current date (e.g., 2025-10-19) into the device's local storage under a key like lastTyreCheckDate.

Displaying:

When you open the app, it reads this lastTyreCheckDate from storage.

It calculates the difference: Today's Date - lastTyreCheckDate.

It displays this difference as "Days since last check".

Alerting:

It runs an if statement on the number of days:

if Days > 30: Show a red "Overdue" warning.

else: Show a green "OK" status.


