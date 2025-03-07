import { prisma } from "@/prisma/client";
import { NextResponse } from "next/server";
import { issueSchema } from "../../validationSchemas";

export const POST = async function (request: Request) {
  const body = await request.json();

  const validation = issueSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  const issue = await prisma.issue.create({
    data: {
      title: body.title,
      description: body.description,
    },
  });

  return NextResponse.json(issue, { status: 201 });
};
