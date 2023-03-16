@Aspect
@Component
public class LoggingAspect {
    @Before("execution(* com.example.MyService.doSomething(..))")
    public void logBefore(JoinPoint joinPoint) {
        System.out.println("Before " + joinPoint.getSignature());
    }
}
