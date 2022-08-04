import ApiService from './api';

class StudentService extends ApiService {
    constructor() {
        super("/api/student")
    }

    list() {
        return this.get("/");
    }

    save(student: Object) {
        return this.post("/", student);
    }

    updateStudent(id: number, student: Object) {
        return this.put(`/${id}`, student);
    }

    findStudentById(id: string) {
        return this.get(`/${id}`);
    }
}

export default StudentService;