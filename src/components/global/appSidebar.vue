<template>
    <div class="sidebar">
        <div class="brand">
            <a href="#">
                <div class="cube-container">
                    <div class="cube">
                        <div class="face front"></div>
                        <div class="face back"></div>
                        <div class="face right"></div>
                        <div class="face left"></div>
                        <div class="face top"></div>
                        <div class="face bottom"></div>
                    </div>
                </div>

                <div class="brand-name">THE CUBE</div>
            </a>
        </div>
        <div class="sidebar-buttons">
            <div
                class="pages"
                @click="open = !open"
                :class="open ? 'open' : ''"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14px"
                    height="14px"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-home"
                >
                    <path
                        d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
                    ></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
                <p>Dashboards</p>
                <span>2</span>
            </div>

            <span
                class="pageLink"
                @click="active = 'ecommerce'"
                :class="active === 'ecommerce' ? 'active' : ''"
            >
                <transition name="slide-fade1">
                    <router-link
                        to="/"
                        tag="div"
                        exact
                        class="ecommerce"
                        v-show="open"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14px"
                            height="14px"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="feather feather-circle"
                        >
                            <circle cx="12" cy="12" r="10"></circle>
                        </svg>
                        <p>e-commerce</p>
                    </router-link>
                </transition>
            </span>

            <span
                class="pageLink"
                @click="active = 'analytics'"
                :class="active === 'analytics' ? 'active' : ''"
            >
                <transition name="slide-fade2">
                    <router-link
                        to="/analytics"
                        tag="div"
                        class="analytics"
                        v-show="open"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14px"
                            height="14px"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="feather feather-circle"
                        >
                            <circle cx="12" cy="12" r="10"></circle>
                        </svg>
                        <p>analytics</p>
                    </router-link>
                </transition>
            </span>

            <div class="apps-header"><span>APP & PAGES</span></div>
            <span @click="active = 'Email'">
                <router-link
                    to="/Email"
                    tag="div"
                    class="Email"
                    :class="active === 'Email' ? 'active' : ''"
                >
                    <svg
                        data-v-72b87d2e=""
                        data-v-1134b199=""
                        xmlns="http://www.w3.org/2000/svg"
                        width="21px"
                        height="21px"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-mail"
                    >
                        <path
                            data-v-72b87d2e=""
                            data-v-1134b199=""
                            d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                        ></path>
                        <polyline
                            data-v-72b87d2e=""
                            data-v-1134b199=""
                            points="22,6 12,13 2,6"
                        ></polyline>
                    </svg>

                    <p>Email</p>
                </router-link>
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name: "sidebar",
    data: function () {
        return {
            open: false,
            active: "ecommerce",
        };
    },
};
</script>
<style lang="scss" scoped>
@keyframes spin {
    from {
        transform: rotateX(0deg) rotateY(0deg);
    }
    to {
        transform: rotateX(360deg) rotateY(360deg);
    }
}

@keyframes anim2 {
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(0);
    }
}
html {
    overflow: auto;
}
ul {
    list-style: none;
}
.sidebar {
    width: 22rem;
    position: fixed;
    animation: anim2 0.6s linear forwards;
    background-color: #283046;
    z-index: 15;
    .brand {
        padding: 0.35rem 1rem 0.3rem 1.64rem;
        position: relative;
        text-decoration: none;
        display: flex;
        margin-top: 22px;
        margin-bottom: 10px;
        margin-left: 3px;
        .brand-name {
            display: inline-block;
            color: #9fa5b3;
            font-size: 35px;
            font-style: italic;
            font-weight: 700;
            margin-left: 28px;
        }
        .cube-container {
            display: inline-block;
            width: 40px;
            height: 40px;
            perspective: 1000px;
            .cube {
                transform-style: preserve-3d;
                width: 100%;
                height: 100%;
                position: relative;
                animation: spin 10s infinite linear;
                .face {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    background-image: repeating-linear-gradient(
                            0deg,
                            RGBA(22 30 48) 0px,
                            RGBA(197 197 197) 1px,
                            #28375996 1px,
                            transparent 21px
                        ),
                        repeating-linear-gradient(
                            90deg,
                            RGBA(207 208 209) 0px,
                            RGBA(255 255 255) 1px,
                            transparent 1px,
                            #d0d2d5 21px
                        ),
                        linear-gradient(90deg, white, white);
                    &.top {
                        transform: rotateX(90deg) translateZ(20px);
                    }
                    &.bottom {
                        transform: rotateX(-90deg) translateZ(20px);
                    }

                    &.right {
                        transform: rotateY(90deg) translateZ(20px);
                    }
                    &.left {
                        transform: rotateY(-90deg) translateZ(20px);
                    }

                    &.front {
                        transform: rotateX(0deg) translateZ(20px);
                    }
                    &.back {
                        transform: rotateX(-180deg) translateZ(20px);
                    }
                }
            }
        }
    }
    .sidebar-buttons {
        overflow-x: hidden;
        height: 680px;
        .pages {
            background-color: #161d31;
        }
        .pages,
        .ecommerce,
        .analytics {
            display: flex;
            padding: 10px 15px 10px 20px;
            width: 90%;
            margin: auto;
            border-radius: 4px;
            text-align: left;
            color: #fff;
            margin-top: 5px;
            cursor: pointer;
            p,
            svg,
            span {
                display: inline-block;
                padding: 0;
                margin: 0;
                transition: transform 0.25s ease;
            }
            &:hover {
                p,
                svg,
                span {
                    transform: translateX(5px);
                }
            }
        }
        .pages {
            position: relative;
            z-index: 2;
            svg {
                width: 19px;
                height: 21px;
                margin-right: 15px;
            }
            span {
                position: absolute;
                right: 40px;
                color: #ff9f43;
                background-color: #eb95444a;
                width: 22px;
                height: 22px;
                font-size: 14px;
                text-align: center;
                border-radius: 50%;
            }
            &::after {
                content: "";
                height: 1.1rem;
                width: 1.1rem;
                display: inline-block;
                position: absolute;
                top: 11px;
                right: 9px;
                background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236e6b7b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-right'%3E%3Cpath d='M9 18l6-6-6-6'/%3E%3C/svg%3E");
                transform: rotate(0deg);
                transition: transform 0.5s;
            }
            &.open {
                background-color: #313b5c;
                &::after {
                    transform: rotate(90deg);
                }
            }
        }
        .ecommerce,
        .analytics {
            position: relative;
            z-index: 1;
            background-color: #5b5486;
            svg {
                width: 16px;
                height: 24px;
                margin-right: 15px;
            }
        }
        .pageLink.active {
            .ecommerce,
            .analytics {
                background-color: #655ccf;
            }
        }
        /* Scrollbar Styling */
        &:hover {
            overflow-y: scroll;
            &::-webkit-scrollbar {
                width: 10px;
                opacity: 0.9;
            }
        }

        &::-webkit-scrollbar-track {
            background-color: #3b4253;
            -webkit-border-radius: 10px;
            border-radius: 15px;
        }

        &::-webkit-scrollbar-thumb {
            -webkit-border-radius: 10px;
            border-radius: 15px;
            background: #b4b7bd;
        }
        //apps
        .apps-header {
            color: #676d7d;
            font-size: 0.9rem;
            text-align: left;
            width: 90%;
            margin: 2rem 0 0.8rem 2.2rem;
        }
        .Email {
            display: flex;
            color: #fff;
            text-align: left;
            width: 90%;
            margin: 0 auto !important;
            padding: 10px 15px 10px 15px;
            border-radius: 4px;
            cursor: pointer;
            &.active {
                background: linear-gradient(
                    118deg,
                    #7367f0,
                    rgba(115, 103, 240, 0.7)
                );
                box-shadow: 0 0 10px 1px RGBA(115 103 240 / 70%);
            }
            svg,
            p {
                transition: transform 0.25s ease;
            }
            svg {
                margin-right: 15px;
            }
            p {
                display: inline;
                margin: 0;
            }
            &:hover {
                svg,
                p {
                    transform: translateX(5px);
                }
            }
            &.clicked {
                background: linear-gradient(
                    118deg,
                    #7367f0,
                    rgba(115, 103, 240, 0.7)
                );
            }
        }
    }
}

//vue transition
.slide-fade1-enter-active {
    transition: all 0.3s linear;
}
.slide-fade1-leave-active {
    transition: all 0.3s linear;
}
.slide-fade1-enter, .slide-fade1-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateY(-110%);
}

.slide-fade2-enter-active {
    transition: all 0.3s linear;
}
.slide-fade2-leave-active {
    transition: all 0.3s linear;
}
.slide-fade2-enter, .slide-fade2-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateY(-220%);
}
</style>
