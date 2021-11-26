<template>
    <div class="email-sidebar">
        <div class="compose">
            <button>Compose</button>
        </div>
        <div class="groups">
            <ul>
                <li
                    @click="active = 'inbox'"
                    :class="active == 'inbox' ? 'active' : ''"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18px"
                        height="18px"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="mr-75 feather feather-mail"
                    >
                        <path
                            d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
                        ></path>
                        <polyline points="22,6 12,13 2,6"></polyline></svg
                    >Inbox
                </li>
                <span class="notifiction"></span>

                <li
                    @click="active = 'sent'"
                    :class="active == 'sent' ? 'active' : ''"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18px"
                        height="18px"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="mr-75 feather feather-send"
                    >
                        <line x1="22" y1="2" x2="11" y2="13"></line>
                        <polygon
                            points="22 2 15 22 11 13 2 9 22 2"
                        ></polygon></svg
                    >Sent
                </li>

                <li
                    @click="active = 'draft'"
                    :class="active == 'draft' ? 'active' : ''"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18px"
                        height="18px"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="mr-75 feather feather-edit-2"
                    >
                        <path
                            d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"
                        ></path></svg
                    >Draft
                </li>
                <span class="notifiction"></span>
                <li
                    @click="active = 'starred'"
                    :class="active == 'starred' ? 'active' : ''"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18px"
                        height="18px"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="mr-75 feather feather-star"
                    >
                        <polygon
                            points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                        ></polygon></svg
                    >Starred
                </li>
                <li
                    @click="active = 'spam'"
                    :class="active == 'spam' ? 'active' : ''"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18px"
                        height="18px"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="mr-75 feather feather-info"
                    >
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="16" x2="12" y2="12"></line>
                        <line x1="12" y1="8" x2="12.01" y2="8"></line></svg
                    >Spam
                </li>
                <span class="notifiction"></span>
                <li
                    @click="active = 'trash'"
                    :class="active == 'trash' ? 'active' : ''"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18px"
                        height="18px"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="mr-75 feather feather-trash"
                    >
                        <polyline points="3 6 5 6 21 6"></polyline>
                        <path
                            d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
                        ></path></svg
                    >Trash
                </li>
            </ul>
        </div>
        <div class="labels">
            <p>LABELS</p>
            <ul>
                <li><span class="bullet"></span> Personal</li>
                <li><span class="bullet"></span> Company</li>
                <li><span class="bullet"></span> Important</li>
                <li><span class="bullet"></span> Private</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "emailSidebar",
    data: function () {
        return {
            active: "inbox",
        };
    },
};
</script>
<style lang="scss" scoped>
/* -----
SVG Icons
----- */

svg {
    margin-right: 0.7rem;
    color: #b4b7bd;
}
ul {
    padding-left: 0;
    margin: 0;
    list-style: none;
    color: #b4b7bd;
    text-align: left;
}
.email-sidebar {
    background-color: #283046;
    height: 600px;
    float: left;
    border: 1px solid #3b4253;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    margin-right: 1.2px;
    .compose {
        button {
            color: #fff;
            background-color: #7367f0;
            padding: 10px 75px;
            border: 1px solid transparent;
            border-radius: 5px;
            border-color: #7367f0;
            margin: 20px;
            &:hover {
                box-shadow: 0 8px 25px -8px #7367f0;
            }
        }
    }
    .groups {
        ul {
            li {
                padding: 10px 15px 10px 21px;
                border-left: 2px solid transparent;
                font-size: 15px;
                cursor: pointer;
                &:hover {
                    color: #7367f0;
                }
                &:hover svg {
                    color: #7367f0;
                }
                &.active {
                    border-left: 2px solid #7367f0;
                    color: #7367f0;
                    svg {
                        color: #7367f0;
                    }
                }
            }
        }
    }
    .labels {
        p {
            color: #676d7d;
            text-align: left;
            font-size: 12px;
            padding: 25px 15px 10px 21px;
        }
        ul {
            li {
                padding: 10px 15px 10px 21px;
                font-size: 15px;
                .bullet {
                    display: inline-block;
                    width: 10px;
                    height: 10px;
                    border-radius: 50%;
                    background-color: red;
                    margin-right: 10px;
                }
                &:nth-of-type(1) {
                    .bullet {
                        background-color: #28c76f;
                    }
                }
                &:nth-of-type(2) {
                    .bullet {
                        background-color: #7367f0;
                    }
                }
                &:nth-of-type(3) {
                    .bullet {
                        background-color: #ff9f43;
                    }
                }
                &:nth-of-type(4) {
                    .bullet {
                        background-color: #ea5455;
                    }
                }
            }
        }
    }
}
</style>
