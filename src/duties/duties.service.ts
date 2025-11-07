import { database } from "../config/pg_db";
import { InsertDuty } from "./dtos/insertDuty.dto";
import { Duty } from "./models/duty.model";

export async function insertDuty(duty: InsertDuty): Promise<Duty> {
    try {
        const response = await database.query(
            'INSERT INTO duty (id, name) VALUES ($1, $2) RETURNING id, name',
            [crypto.randomUUID(), duty.name]
        );

        return response.rows[0];
    } catch (error) {
        throw new Error('Error inserting data');
    }
}

export async function getDuties(): Promise<Duty[]> {
    try {
        const response = await database.query(
            'SELECT id, name FROM duty'
        );

        return response.rows;
    } catch (error) {
        throw new Error('Error getting data');
    }
}

export async function updateDuty(duty: Duty) {
    try {
        const response = await database.query(
            'UPDATE duty SET name = $1 WHERE id = $2 RETURNING id, name',
            [duty.name, duty.id]
        );

        return response.rows[0];
    } catch (error) {
        throw new Error('Error updating duty');
    }
}