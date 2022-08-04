import ApiService from './api';

class TeacherService extends ApiService {
    constructor() {
        super("/api/teacher")
    }

    list() {
        return this.get("/");
    }

    save(teacher: Object) {
        return this.post("/", teacher);
    }

    updateTeacher(id: number, teacher: Object) {
        return this.put(`/${id}`, teacher);
    }

    findTeacherById(id: string) {
        return this.get(`/${id}`);
    }
}

export default TeacherService;