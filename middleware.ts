import { clerkMiddleware , createRouteMatcher} from "@clerk/nextjs/server";

const proctectedRoutes = createRouteMatcher([
    '/',
    '/upcoming',
    '/previous',
    '/recordings',
    '/personal-room',
    '/meeting(.*)'
])

export default clerkMiddleware((auth , req)=>{
    // if(proctectedRoutes(req)) auth().protect() 
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};