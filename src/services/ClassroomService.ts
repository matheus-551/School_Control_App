import ApiService from './api';

class ClassroomService extends ApiService {
    constructor() {
        super("/api/classroom")
    }

    list() {
        return this.get("/");
    }

    save(classroom: Object) {
        return this.post("/", classroom);
    }

    updateClassroom(id: number, classroom: Object) {
        return this.put(`/${id}`, classroom);
    }

    findClassroomByid(id: string) {
        return this.get(`/${id}`);
    }
}

export default ClassroomService;