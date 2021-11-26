<template>
    <div class="email-body">
        <div class="search-bar">
            <div class="search-container">
                <div class="search-icon">
                    <svg
                        data-v-5ccc7666=""
                        xmlns="http://www.w3.org/2000/svg"
                        width="14px"
                        height="14px"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="text-muted feather feather-search"
                    >
                        <circle
                            data-v-5ccc7666=""
                            cx="11"
                            cy="11"
                            r="8"
                        ></circle>
                        <line
                            data-v-5ccc7666=""
                            x1="21"
                            y1="21"
                            x2="16.65"
                            y2="16.65"
                        ></line>
                    </svg>
                </div>

                <form action="">
                    <input type="text" placeholder="searh email" />
                </form>
            </div>
        </div>

        <div class="select-bar">
            <label class="select cheack-box">
                <input type="checkbox" />
                <span class="checkmark"></span>
            </label>
            <span>Select All</span>
        </div>

        <div class="emails-blocks">
            <ul>
                <li
                    v-for="email in emails"
                    :key="email.id"
                    :name="email.name"
                    :title="email.title"
                    :body="email.body"
                >
                    <div class="media">
                        <div class="media-aside">
                            <img src="../../assets/p1.webp" />

                            <div class="select-star">
                                <label class="container cheack-box">
                                    <input
                                        type="checkbox"
                                        @click="
                                            email.selected = !email.selected
                                        "
                                        :class="
                                            email.selected
                                                ? ':checked ~ .checkmark:after'
                                                : ''
                                        "
                                    />
                                    <span class="checkmark"></span>
                                </label>

                                <div class="star">
                                    <svg
                                        @click="email.starred = !email.starred"
                                        :class="
                                            email.starred ? 'fill-star' : ''
                                        "
                                        data-v-5ccc7666=""
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="17px"
                                        height="17px"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <polygon
                                            data-v-5ccc7666=""
                                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                                        ></polygon>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div class="media-body">
                            <div class="main-info">
                                <h5>{{ email.name }}</h5>
                            </div>
                            <p>{{ email.title }}</p>
                            <div class="object">
                                {{ email.body | shorten(110) }}
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import jsonEmails from "../../json/emails.json";

export default {
    name: "emailBody",
    data: function () {
        return {
            emails: jsonEmails,
        };
    },
    filters: {
        shorten: function (e, len) {
            if (e.length > len) {
                return e.substring(0, len) + "...";
            } else {
                return e;
            }
        },
    },
};
</script>
<style lang="scss" scoped>
ul {
    list-style: none;
}
.cheack-box {
    position: relative;
    padding: 11px 15px;
    user-select: none;
    input:checked ~ .checkmark {
        background-color: #7367f0;
    }
    input:checked ~ .checkmark:after {
        display: block;
    }
    input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
        border: 1px solid #3b4253 !important;
        background-color: transparent !important;
    }
}
.checkmark {
    position: absolute;
    top: 2.5px;
    left: 5px;
    height: 16px;
    width: 16px;
    border: 1px solid #485060;
    border-radius: 3px;
    background-color: #283046;
    cursor: pointer;
    &:after {
        content: "";
        position: absolute;
        display: none;
        left: 4px;
        top: 1px;
        width: 5px;
        height: 10px;
        border: solid white;
        border-width: 0 3px 3px 0;
        transform: rotate(45deg);
    }
}
.email-body {
    width: 100%;
    float: left;
    height: 600px;
    background-color: #283046;
    border-top-right-radius: 4px;
    .search-container {
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        border: 1px solid #3b4253;
        border-top-right-radius: 4px;
        .search-icon {
            padding: 11px 15px;
            display: flex;
        }
        form {
            display: inline;
            width: 96%;
            text-align: left;
            font-size: 15px;
            &:focus-visible {
                outline: 0 !important;
                margin-left: 4px;
            }
            input {
                width: 100%;
                padding: 13px 20px 13px 0;
                background-color: transparent;
                border: none;
                color: #fff !important;
                transition: all 0.1s linear;
                &:focus-visible {
                    outline: 0 !important;
                    margin-left: 4px;
                }
            }
        }
    }
    .select-bar {
        width: 100%;
        height: 50px;
        display: flex;
        align-items: center;
        border: 1px solid #3b4253;
        border-top: none;
        .select {
            margin-left: 10px;
        }
        span {
            color: #b4b7bd;
            font-size: 14px;
        }
    }
    .emails-blocks {
        height: calc(100% - 50px - 50px);
        overflow: hidden;
        &:hover {
            overflow-y: scroll;
            /* Scrollbar Styling */
            &::-webkit-scrollbar {
                width: 8px;
                opacity: 0.9;
            }
            &::-webkit-scrollbar-track {
                background-color: #3b4253;
                -webkit-border-radius: 10px;
                border-radius: 15px;
            }
            &::-webkit-scrollbar-thumb {
                -webkit-border-radius: 15px;
                border-radius: 15px;
                background: #b4b7bd;
            }
        }

        //media
        ul {
            padding: 0;
            margin: 0;
            .media {
                background-color: #242b3d;
                border-bottom: 1px solid #3b4253;
                display: flex;
                padding: 1rem;
                line-height: 27px;
                transition: all ease 0.2s;
                &:hover {
                    box-shadow: 0 3px 10px 0 #283046;
                    transform: translateY(-2px);
                }
                .media-aside {
                    display: inline-flex;
                    flex-wrap: wrap;
                    width: 50px;
                    img {
                        width: 45px;
                        margin-bottom: 8px;
                    }
                    .select-star {
                        display: inline;
                        .container {
                            display: inline-flex;
                            width: 22.5px;
                            height: 22.5px;
                            padding: 0;
                            input {
                                width: 18px;
                                height: 18px;
                            }
                            .checkmark {
                                position: initial;
                                &::after {
                                    left: 5px;
                                    top: 2px;
                                }
                            }
                        }
                        .star {
                            display: inline-flex;
                            justify-content: flex-end;
                            width: 22.5px;
                            height: 22.5px;
                            svg {
                                width: 18px;
                                height: 18px;
                                color: #b9b9c3;
                                &.fill-star {
                                    color: #ff9f43 !important;
                                    fill: #ff9f43;
                                }
                            }
                        }
                    }
                }
                .media-body {
                    width: calc(100% - 50px);
                    text-align: left;
                    .main-info {
                        width: 100%;
                        color: #b4b7bd;
                        h5 {
                            font-size: 19px;
                            font-weight: 600;
                            color: #d0d2d6;
                            margin: 0;
                        }
                    }
                    p {
                        margin: 0;
                        color: #b4b7bd;
                    }
                    .object {
                        width: 100%;
                        color: #676d7d;
                        font-size: 14px;
                    }
                }
            }
        }
    }
}
</style>
