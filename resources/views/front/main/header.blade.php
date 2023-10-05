<header class="header_section">
    <div class="container-fluid">
        <nav class="navbar navbar-expand-lg custom_nav-container ">
            <a class="navbar-brand" href="index.html">
            <span>
                {{ config('app.name') }}
            </span>
            </a>

            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class=""> </span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav  ml-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="/">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="about.html"> About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="job.html">Jobs</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="freelancer.html">Freelancers</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="{{ route('admin') }}">
                            <i class="fa fa-user" aria-hidden="true"></i>
                            <span>
                    Login
                  </span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="{{ route('admin') }}">
                            <i class="fa fa-user" aria-hidden="true"></i>
                            <span>
                    Sign Up
                  </span>
                        </a>
                    </li>
                    <form class="form-inline">
                        <button class="btn   nav_search-btn" type="submit">
                            <i class="fa fa-search" aria-hidden="true"></i>
                        </button>
                    </form>
                </ul>
            </div>
        </nav>
    </div>
</header>
