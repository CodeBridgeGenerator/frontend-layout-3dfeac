
import { faker } from "@faker-js/faker";
export default (user,count) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
stuName: faker.lorem.sentence(""),
courseName: faker.lorem.sentence(""),
DOB: faker.lorem.sentence(""),
contactNo: faker.lorem.sentence(""),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
