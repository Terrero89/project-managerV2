import { defineStore } from 'pinia'


export const useProjectStore = defineStore('projectStore', {

  state: () => {
    return {

      projects: [
        {
          id: 1,
          projectType: "Web Development",
          description: "Website for business",
          duration: 8,
          age: 15,
          startDate: "06/27/2022",
          endDate: '',
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
          description: "Portfolio project from udemy",
          duration: 15,
          age: 15,
          startDate: "06/27/2022",
          endDate: '',
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


