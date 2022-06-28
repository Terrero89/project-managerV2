import { defineStore } from 'pinia'


export const useProjectStore= defineStore('projects', {

  state: () => {
    return {

      projects: [
        {
          id: 1,
          projectType: "Web Development",
          projectDescription: "Website for business",
          startDate: "06/27/2022",
          projectDuration: 2,
          projectEndDate: '',
          technologiesUsed: ["react", "nextjs", "Boostrap"],
          isComplete: false,
          tasks: [
            {
              taskName: "Hero Section",
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
          projectType: "Python Dev",
          projectDescription: "Backedn",
          startDate: "06/27/2022",
          projectDuration: 3,
          projectEndDate: '',
          technologiesUsed: ["Vue", "nuxtjs", "Boostrap"],
          isComplete: false,
          tasks: [
            {
              taskName: "REst API",
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

  getters:{
    loadedList(state){
      return state.projects
    },

    loadedTasks (state) {
      const tan = state.projects.tasks
      return tan
    }

  },


})
