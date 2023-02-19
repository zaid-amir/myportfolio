import portfolio from "./portfolio.PNG";
import todoApp from "./todoapp.jpeg";
import todoNative from "./todonative.jpeg";
import ecom from "./ecomm.PNG";
export default {
  projects: [
    {
      id: 1,
      education: "Bachelors",
      marks: "3.09",
      total: "4",
      board: "Electrical Engineer",
      institute: "National University of Science and Technology",
    },
    {
      id: 2,
      education: "Intermediate",
      marks: "961",
      total: "1100",
      board: "BISE Faisalabad",
      institute: "Punjab College",
    },
    {
      id: 3,
      education: "Matric",
      marks: "971",
      total: "1100",
      board: "BISE Faisalabad",
      institute: "Divisional Public School and College",
    },
  ],

  internship: [
    {
      id: 1,
      company: "Alayzone",
      from: "30/7/2022",
      to: "Present",
      role: "Front-end developer Intern",
      //    details:"Learning new skills and working on live projects"
      details:
        "Learned front-end object-oriented programming to develop client server systems",
    },
    {
      id: 2,
      company: "FESCO",
      from: "30/7/2021",
      to: "14/9/2021",
      role: "Intern",
      //    details:"Learning new skills and working on live projects"
      details:
        "Studied power generation and distribution, also visited and observed grid stations.",
    },
    {
      id: 3,
      company: "WAPDA",
      from: "8/7/2019",
      to: "2/8/2021",
      role: "Intern",
      //    details:"Learning new skills and working on live projects"
      details:
        "Studied power generation from steam power plants and gas power plants. Moreover visited distribution simulation labs. ",
    },
  ],
  portfolioProjects: [
    {
      id: 1,
      title: "Ecommerce website",
      language: "React",
      image: ecom,
      // "https://i.pinimg.com/736x/3f/f3/76/3ff3761db32f85756bda47251b1230a3.jpg",
      description:
        "I am currently working on an e-commerce website project that aims to provide a seamless shopping experience to customers. For the front-end of the project, I have chosen to use Tailwind CSS - a highly customizable, utility-first CSS framework - to create an aesthetically pleasing user interface that enhances the overall user experience. The website will be designed to be responsive, so it can be viewed on different devices such as desktop, tablets and mobile phones. I am also planning to build the backend for this project to ensure the website is fully functional and secure. Stay tuned for updates on this exciting project!",
    },
    {
      id: 2,
      title: "Todo App",
      language: "React Native",
      image: todoNative,
      // "https://i.pinimg.com/736x/3f/f3/76/3ff3761db32f85756bda47251b1230a3.jpg",
      description:
        "The project is a to-do app built in React Native, a mobile app development framework. The app allows the user to add, delete, or update tasks, which can be organized by category or priority. The user interface was designed using React Native's built-in StyleSheet component, which allows for responsive styling and layout. The app uses local storage to save the user's tasks, so the data persists even after the app is closed. Overall, the app provides a simple and intuitive way for users to manage their tasks on the go.",
    },
    {
      id: 3,
      title: "Todo Website",
      language: "React",
      image: todoApp,
      // "https://i.pinimg.com/736x/3f/f3/76/3ff3761db32f85756bda47251b1230a3.jpg",
      description:
        "I built a to-do app using React JS, which allows users to add, delete, and update their tasks. The app includes both front-end and back-end components, with the front-end built using the Material-UI (MUI) framework and the back-end using MongoDB. To handle the app's state, I used the React-Redux library, which provides a centralized store for managing the app's data. I also implemented user authentication to ensure that only authorized users can access the app. For this, I created a login system that authenticates users and grants them access to the app's features. To provide users with feedback on their actions, I used the Toastify library to display notifications for successful actions, such as adding or updating a task. This helps to make the app more user-friendly and intuitive to use. Overall, this project allowed me to develop my skills in React JS, MUI, Redux, and MongoDB, as well as in creating an intuitive user experience and incorporating advanced features such as user authentication and notifications.",
    },
    {
      id: 4,
      title: "Portfolio Website",
      language: "React",
      image: portfolio,
      // "https://i.pinimg.com/736x/3f/f3/76/3ff3761db32f85756bda47251b1230a3.jpg",
      description:
        "This portfolio website was created using the React.js library and the MUI framework. The purpose of the website is to showcase a collection of personal projects. The navigation menu allows the user to easily access the various project pages.Each project page displays a card with a project title, language, and a brief description. The cards are arranged in a grid for easy navigation. Clicking on a card leads to a more detailed project page with images, a detailed project description. The website was designed with a minimalist approach to keep the focus on the projects themselves. The color scheme was chosen to be easy on the eyes and to give the website a clean and professional look. The website is responsive for mobile and laptops, ensuring a consistent user experience across all devices. Overall, the website is a showcase of the various skills and projects of the creator, demonstrating their proficiency in using React.js and MUI to build a professional-quality portfolio website.",
    },
  ],
};
