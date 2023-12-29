# Macro Tracker
Macro Tracker is made to help you stay on top of your calorie intake goal for the day. Enter your calories consumed and in the push of a button, you will know your calories burned, resting heartrate, and the remaining calories you are away from your calorie goal. You will then be prompted with a message letting you know if you are going to be in a deficit, surplus, or be at maintenance calories by the end of the day.

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

### Prerequisites 
You will need to install the following tools but for the best results, you'll need to have access to the FitBit tools, to get the application up and running on your local machine.

#### Tools
- [Node.js](https://nodejs.org/)
- [Visual Studio Code](https://code.visualstudio.com/)
  
#### FitBit Tools
- FitBit fitness tracker
- FitBit Dev account

### Installing
First, you will need to clone this repository, for help see [Cloning a Repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository).  
After cloning, open a terminal in the project folder and enter the following line  
```
npm run dev
```
Now you can visit your local host to see the web application.  

![image](https://github.com/steve545/macro-tracker/assets/56651529/9fcd0601-d9d2-43be-99d2-27485e18cbdf)

Now you are able to use the web applicaiton locally!  
However, the access token for the FitBit API will need to be updated with your own access token to retrieve the data needed for an accurate calculation. The data being, calories burned and resting heart rate in the day. To register your application and set up your access token, see here [Registering an Applicaiton](https://dev.fitbit.com/build/reference/web-api/developer-guide/getting-started/) and [FitBit OAuth 2.0](https://dev.fitbit.com/build/reference/web-api/troubleshooting-guide/oauth2-tutorial/).


## Future Plans
- Implement feature to allow user to choose if they want to be in a deficit, surplus, or be at maintenance calories.
- Allow the user to choose how many calories they want to be in a deficit or surplus by. For now, the default for the user is to be in a 500 calorie surplus.

## Technologies Used
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [FitBitAPI](https://dev.fitbit.com/)
- FitBit Charge 5 Fitness Tracker
