Vue.component('task-row', {
    props: ["task"],

    template: `
    <article class="p-2 py-4 border-b-2">
      <h4 class="text-xl text-gray-800 font-bold mb-2">{{task.title}}</h4>
      <h5 class="text-xl text-gray-600 font-bold mb-2">{{task.notes}}</h5>
      <div class="flex flex-row">
        <img class="h-8 w-8 rounded-full inline-flex" src="./images/user.png">
        <div class="text-left px-4 w-full">
          <p><a href="#">VSN</a> updated {{task.updatedAt}} minutes ago</p>
        </div>
        <div class="px-4">
          <span>Progress Bar Here</span>
        </div>
      </div>
    </article>
  `
})