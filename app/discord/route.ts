import { NextResponse } from 'next/server';

const DISCORD_INVITE = 'https://discord.gg/WYbPYDhQ8y';

export function GET() {
  return NextResponse.redirect(DISCORD_INVITE, { status: 308 });
}

export const HEAD = GET;
