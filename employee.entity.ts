import EntityBase from "submodules/ex3-ms-framework/entity-base";
import { Column, Entity, JoinTable, ManyToMany } from "typeorm";
import { DepartmentEntity } from "./department.entity";


@Entity('employee')
export class EmployeeEntity extends EntityBase {

    @Column()
    age: number;

    @ManyToMany(() => DepartmentEntity, department => department.employees, { cascade: true, eager: true })
    @JoinTable({ name: "department-employee" })
    departments: DepartmentEntity[];

}