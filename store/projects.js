import { defineStore } from 'pinia'


export const useProjectStore = defineStore('projectStore', {

  state: () => {
    return {

      projects: [
        {
          id: 1,
          projectType: "Web Development",
          description: "Website for business",
          startDate: "06/27/2022",
          duration: 8,
          age: 15,
          projectEndDate: '',
          technologiesUsed: ["react", "nextjs", "Boostrap"],
          isComplete: false,
          tasks: [
            {
              id: 1,
              taskName: "Hero Section",
              category: "Web Development",
              taskDescription: "Building navbar for website",
              startDate: "06/28/2022",
              endDate: "06/28/2022",
              duration: 3,
              isCompleted: true
            },

            {
              id: 2,
              taskName: "Hero Section",
              category: "Web Development",
              taskDescription: "Building navbar for website",
              startDate: "06/28/2022",
              endDate: "06/28/2022",
              duration: 3,
              isCompleted: true
            },


          ]
        },

        {
          id: 2,
          projectType: "Python Development",
          description: "Backend Api for web app contrructed with react",
          startDate: "06/27/2022",
          duration: 8,
          age: 30,
          projectEndDate: '',
          technologiesUsed: ["Vue", "nuxtjs", "Boostrap"],
          isComplete: false,
          tasks: [
            {
              id: 2,
              taskName: "REst API",
              category: "Python Development",
              taskDescription: "Interface for an web appliation with Fullstack",
              startDate: "06/28/2022",
              endDate: "06/28/2022",
              duration: 3,
              isCompleted: true
            },


          ]
        },

        {
          id: 3,
          projectType: "React Development",
          description: "Building Interacting Website using React JS, and Next Js",
          startDate: "06/27/2022",
          duration: 8,
          age: 20,
          projectEndDate: '',
          technologiesUsed: ["Vue", "nuxtjs", "Boostrap"],
          isComplete: true,
          tasks: [
            {
              id: 3,
              taskName: "Navbar from Scratch",
              category: "React Development",
              taskDescription: "Interface for an",
              startDate: "06/28/2022",
              endDate: "06/28/2022",
              duration: 3,
              isCompleted: true
            },


          ]
        }
      ]
    }
  },

  getters: {
    projectList(state) {
      return state.projects
    },

    projectTasks(state) {
      this.projectList.tasks

    }

  },


})


