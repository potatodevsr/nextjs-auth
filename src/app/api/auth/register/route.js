import { NextResponse } from "next/server";
import util from "util";
import db from "../../../../../util/db";

const query = util.promisify(db.query).bind(db);

export const POST = async (req) => {
    const user = await req.json();
    try {
        const results = await query(`INSERT INTO users (first_name, last_name, user_email, user_pw, status, isAdmin, create_by, update_by, create_date, update_date)
            VALUES ('${user.first_name}', '${user.last_name}', '${user.user_email}', '${user.user_pw}', ${user.status}, ${user.isAdmin}, '${user.create_by || ''}', '${user.update_by || ''}', NOW(), NOW())`);
        if (results) return new NextResponse(user, { status: 201 });
    } catch (err) {
        console.log(err);
        return new NextResponse(err.message, { status: 400 });
    }
};