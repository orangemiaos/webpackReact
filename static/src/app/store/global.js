import { observable } from "mobx";

class GlobleStore {
  @observable menus = [];
  @observable count = 1;

  @computed get double() {
    return this.count * 2;
  }
}

autorun(() => {
  console.log("Tasks left: " + todos.unfinishedTodoCount)
})

export default new GlobleStore();
