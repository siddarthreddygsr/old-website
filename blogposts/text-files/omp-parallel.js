document.write(`
    <h1 style="text-align:center;">Parallel or Serial?</h1>
    <br>
    <p>I always loved watching slow motion explotion videos like when a needle touches the balloon in a matter of seconds the fully blown balloon vanishes but in slow motion u see that motion and something that looks like a baby shockwave. Unfortunately, not everything in slow motion is cool, especially the code. We always have to decrease the runtime and make the code as fast as possible. But how do you do it? Yes Math always has a way. You can come up with a very optimized code. But how do u decrease the runtime further more. This is where parallalizing comes in. When you purchase a computer you would be able to use each and every cores of your processor then what's stopping you from using it? Parallalize your code and decrease the runtime. What are you waiting for? just dive into it !! wait I guess I was supposed to introduce you to it right. Ok so lets dive into it.</p>
    <br>
    <h2>How to parallaize ?</h2>
    <p>What actually is parllalizing? is it something like a hidden toggle in your which you enable to run the code parllel? Not actually. There are API's like OpenMP which are used to parllelize ur code. We also have libraries like MPI which help you in parllalizing your code not just among all the cores of your computer but across different cores of different processors in a cluster. You need to be able to identify the parts of the code that can be parrlalized. Dont worry you will get that by practice. Its was never like you know a parllalizing framework so you use the same framework to parllalize every code.</p>
    <img src="/images/omp.png" alt="Open-MP logo" style="width: 33.33vw;display: block; margin: 0 auto;">
    <p>You need know multiple frameworks are their bottlenecks. Now you need analize which framework suits the current case and use it. You dont need to start learn 3-4 frameworks and confuse yourself. I just said that so that you won't be dissapointed if the framework decrease the runtime by only 0.00005% so something like that. Now, we can start talking about how OpenMP works. In simple words OpenMP creates threads that for the code which is being parllalized, then computation is done on that data and then it is joined together and hence decreasing the runtime. Btw here thread is just an instance of the parallel code that is being executed. There are some things like cache coherence to be taken care of about which we will talk later.</p>
    <p>OpenMP works only on the compilation time and not on the preprocessing code and converts it to native C code. (If you want to see how the preprocessed code looks like then compile your code manually using "gcc -E yourcode.c > yourcode.i" you can now cat the file or open with any text editor to see how it looks). To compile the code you need to use -fopenmp otherwise the code will still be running on a single core. As everytime lets start with the hello world</p>

    <div class="code">
        <pre>
    #include<stdio.h>
    int main(){
        #pragma omp parllel {
            printf("Hello World");
        }
        return 0;
    }</pre>
    </div>
    <p>OK!! so we were trying to parallize a code which doesnt actually require parallization but yeah this was just to understand stuff. Now, what is this #pragma omp parallel line even mean ? <a href="https://gcc.gnu.org/onlinedocs/cpp/Pragmas.html" target=_blank><strong><u>pragma</u></strong></a> the method specified by the C standard for providing additional information to the compiler, beyond what is conveyed in the language itself. The "omp parallel" directive explicitly instructs the compiler to parallelize the chosen block of code. <a href="https://www.ibm.com/docs/en/zos/2.4.0?topic=processing-pragma-omp-parallel" target=_blank><strong> ->Read more here<-</strong></a> Now we know what #pragma omp parallel does lets compile it using the flag "-fopenmp" So what do you think the output is gonna be when u compile it with "gcc -fopenmp omp-hello.c && ./a.out". The output looks something like this</p>

    <div class="code">
        <pre>
        Hello WorldHello WorldHello WorldHello WorldHello World

        Hello World

        Hello World
        Hello World</pre>
    </div>
    <p>So whats going on here? First thing to be noted is that we did not explicitly declare the number of threads. Which means OpenMP set the number of threads to default that is usually the number of cores of your processor. Now, each thread is trying to write to console at the same time. This is called <a href="https://www.gnu.org/software/tar/manual/html_node/Race-conditions.html" target=_blank><strong>"race condition.gi"</strong></a>. You can explicitly set the number of threads you want the code to run on using omp_set_thread_num(2) here 2 is the no. of threads. OK !! now where do we use multi-threading you can try initializing a very huge array using multi threading. When you parallalize this code the pragma directive (#pragma omp parallel for) it divides loop iterations between the threads. As all the operations are independent of operation performed by other threads. If you want to try out some cool stuff then you can try parallalizing <a href="https://hpc.pnl.gov/srumma/srumma-ipdps04.pdf" target=_blank><strong>"Matrix Multiplication"</strong></a>. I will be trying to make a multi threaded password cracker in an upcoming blog.</p>
    <p>You can use this pdf for a reference <a href="https://www.openmp.org/wp-content/uploads/openmp-examples-4.5.0.pdf" target=_blank><strong>"OpenMP Examples"</strong></a>. </p>
    <p style="text-align:center">CLICKING ON ANY BOLD TEXT IN A PARAGRAPH WILL REDIRECT YOU TO SOME USEFUL RESOURCES FOR LEARNING MORE ABOUT IT.<p>
`);
