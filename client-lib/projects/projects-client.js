import BaseClient from "@client-lib/base-client";

class ProjectsClient extends BaseClient {
  constructor() {
    super();
  }
  getProjectsList() {
    return this.get(`${this.base_url}/projects/get-projects-list`);
  }
}

export default ProjectsClient;
