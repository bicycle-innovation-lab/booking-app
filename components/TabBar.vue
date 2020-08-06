<template>
  <nav class="tabbar">
    <ul>
      <li>
        <nuxt-link to="/">
          <div>
            <span>
              <svg>
                <use xlink:href="#dashboardIcon" />
              </svg>
            </span>
            <span>
              <svg>
                <use xlink:href="#dashboardIconFilled" />
              </svg>
            </span>
          </div>
          <strong>Bikes</strong>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/bookings">
          <div>
            <span>
              <svg>
                <use xlink:href="#cameraIcon" />
              </svg>
            </span>
            <span>
              <svg>
                <use xlink:href="#cameraIconFilled" />
              </svg>
            </span>
          </div>
          <strong>Bookings</strong>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/profile">
          <div>
            <span>
              <svg>
                <use xlink:href="#userIcon" />
              </svg>
            </span>
            <span>
              <svg>
                <use xlink:href="#userIconFilled" />
              </svg>
            </span>
          </div>
          <strong>Profile</strong>
        </nuxt-link>
      </li>
    </ul>

    <!-- <em /> -->

    <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
      <symbol id="dashboardIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <g stroke-linecap="square" stroke-linejoin="miter" stroke-width="2">
          <path fill="none" stroke-miterlimit="10" d="M6.3,10C6.1,10.6,6,11.3,6,12" stroke-linecap="butt" />
          <path fill="none" stroke-miterlimit="10" d="M18,12c0-3.3-2.7-6-6-6 c-0.7,0-1.4,0.1-2,0.3" stroke-linecap="butt" />
          <line
            fill="none"
            stroke-miterlimit="10"
            x1="10.6"
            y1="10.6"
            x2="7"
            y2="7"
          />
          <circle fill="none" stroke-miterlimit="10" cx="12" cy="12" r="2" />
          <circle fill="none" stroke-miterlimit="10" cx="12" cy="12" r="11" />
        </g>
      </symbol>
      <symbol id="dashboardIconFilled" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path stroke="none" d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12s12-5.383,12-12S18.617,0,12,0z M5,12c0,0.552-0.447,1-1,1 s-1-0.448-1-1c0-1.387,0.325-2.696,0.887-3.871l1.526,1.526C5.15,10.389,5,11.177,5,12z M12,15c-1.654,0-3-1.346-3-3 c0-0.462,0.113-0.894,0.3-1.285L5.086,6.5L6.5,5.086l4.214,4.215C11.106,9.114,11.538,9,12,9c1.654,0,3,1.346,3,3S13.654,15,12,15z M20,13c-0.553,0-1-0.448-1-1c0-3.86-3.141-7-7-7c-0.823,0-1.61,0.15-2.345,0.413L8.13,3.887C9.304,3.324,10.613,3,12,3 c4.963,0,9,4.038,9,9C21,12.552,20.553,13,20,13z" />
      </symbol>
      <symbol id="cameraIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <rect
          x="48"
          y="80"
          width="416"
          height="384"
          rx="48"
          ry="48"
          style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px"
        />
        <path d="M397.82,80H114.18C77.69,80,48,110.15,48,147.2V208H64c0-16,16-32,32-32H416c16,0,32,16,32,32h16V147.2C464,110.15,434.31,80,397.82,80Z" />
        <circle cx="296" cy="232" r="24" />
        <circle cx="376" cy="232" r="24" />
        <circle cx="296" cy="312" r="24" />
        <circle cx="376" cy="312" r="24" />
        <circle cx="136" cy="312" r="24" />
        <circle cx="216" cy="312" r="24" />
        <circle cx="136" cy="392" r="24" />
        <circle cx="216" cy="392" r="24" />
        <circle cx="296" cy="392" r="24" />
        <line x1="128" y1="48" x2="128" y2="80" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
        <line x1="384" y1="48" x2="384" y2="80" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" />
      </symbol>
      <symbol id="cameraIconFilled" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path d="M416,64H400V48.45c0-8.61-6.62-16-15.23-16.43A16,16,0,0,0,368,48V64H144V48.45c0-8.61-6.62-16-15.23-16.43A16,16,0,0,0,112,48V64H96a64,64,0,0,0-64,64V416a64,64,0,0,0,64,64H416a64,64,0,0,0,64-64V128A64,64,0,0,0,416,64ZM136,416a24,24,0,1,1,24-24A24,24,0,0,1,136,416Zm0-80a24,24,0,1,1,24-24A24,24,0,0,1,136,336Zm80,80a24,24,0,1,1,24-24A24,24,0,0,1,216,416Zm0-80a24,24,0,1,1,24-24A24,24,0,0,1,216,336Zm80,80a24,24,0,1,1,24-24A24,24,0,0,1,296,416Zm0-80a24,24,0,1,1,24-24A24,24,0,0,1,296,336Zm0-80a24,24,0,1,1,24-24A24,24,0,0,1,296,256Zm80,80a24,24,0,1,1,24-24A24,24,0,0,1,376,336Zm0-80a24,24,0,1,1,24-24A24,24,0,0,1,376,256Zm72-120v16a8,8,0,0,1-8,8H72a8,8,0,0,1-8-8V128A32.09,32.09,0,0,1,96,96H416a32.09,32.09,0,0,1,32,32Z" />
      </symbol>
      <symbol id="userIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <g stroke-linecap="square" stroke-linejoin="miter" stroke-width="2">
          <path fill="none" stroke-miterlimit="10" d="M12,12L12,12 c-2.761,0-5-2.239-5-5V6c0-2.761,2.239-5,5-5h0c2.761,0,5,2.239,5,5v1C17,9.761,14.761,12,12,12z" />
          <path fill="none" stroke-miterlimit="10" d="M22,20.908 c0-1.8-1.197-3.383-2.934-3.856C17.172,16.535,14.586,16,12,16s-5.172,0.535-7.066,1.052C3.197,17.525,2,19.108,2,20.908V23h20 V20.908z" />
        </g>
      </symbol>
      <symbol id="userIconFilled" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <g stroke="none">
          <path d="M12,13c3.309,0,6-2.691,6-6V6c0-3.309-2.691-6-6-6S6,2.691,6,6v1C6,10.309,8.691,13,12,13z" />
          <path d="M19.322,15.981c-4.704-1.303-9.939-1.303-14.644,0C2.513,16.581,1,18.564,1,20.805V24h22 v-3.195C23,18.564,21.487,16.581,19.322,15.981z" />
        </g>
      </symbol>
    </svg>
  </nav>
</template>

<script>
export default {
  name: 'TabBar'

}
</script>

<style lang="scss" scoped>
.tabbar {
    box-sizing: border-box;
    border-radius: 6px;
    position: fixed;
    bottom: 0;
    width: 100%;
    background: var(--background);
    padding: .5rem .5rem 2rem;
    box-shadow: 0 -3px 15px 5px rgba(0, 0, 0, 0.06);
    ul {
        max-width: 395px;
        margin: 0 auto;
        padding: 0;
        list-style: none;
        display: flex;
        position: relative;
        z-index: 1;
        li {
            position: relative;
            flex-grow: 1;
            a {
              text-decoration: none;
              &.active {
                --d: 1;
                z-index: 5;
                div {
                  span {
                    animation: high .35s linear forwards .05s;
                    &:first-child {
                      svg {
                        fill: var(--icon-b-active);
                        stroke: var(--icon-b-active);
                      }
                    }
                    &:last-child {
                      height: 20px;
                      transition: height .3s ease .25s;
                    }
                  }
                  &::after {
                    content: "";
                    display: block;
                    width: 6px;
                    height: 6px;
                    background-color: var(--dot);
                    position: absolute;
                    bottom: -13px;
                    left: 6px;
                    border-radius: 50%;
                  }
                }
                strong {
                  opacity: 0;
                  transform: scale(.6);
                }
            }
                cursor: pointer;
                display: table;
                position: relative;
                display: flex;
                z-index: 1;
                justify-content: center;
                align-items: center;
                height: 60px;
                -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
                div,
                span,
                svg {
                    width: 20px;
                    height: 20px;
                    display: block;
                    backface-visibility: hidden;
                    -webkit-backface-visibility: hidden;
                }
                div {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -84%);
                    span {
                        width: 20px;
                        bottom: 0;
                        left: 0;
                        transform-origin: 50% 50%;
                        position: absolute;
                        overflow: hidden;
                        z-index: 1;
                        background: var(--background);
                        transform: scale(.94);
                        transform-origin: 50% 100%;
                        animation: down .3s linear forwards;
                        svg {
                            position: absolute;
                            left: 0;
                            bottom: 0;
                        }
                        &:first-child {
                            height: 20px;
                            svg {
                                transition: fill .3s ease, stroke .3s ease;
                                fill: var(--icon);
                                stroke: var(--icon);
                            }
                        }
                        &:last-child {
                            height: 0;
                            z-index: 5;
                            transition: height .25s ease;
                            svg {
                                fill: var(--active);
                                stroke: var(--active);
                            }
                        }
                    }
                }
                strong {
                    font-size: 12px;
                    font-weight: 400;
                    margin-top: 28px;
                    color: var(--text);
                    transition: all .3s ease;
                }
                &:hover {
                    div {
                        span {
                            &:first-child {
                                svg {
                                    fill: var(--hover);
                                    stroke: var(--hover);
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    em {
      /* stylelint-disable-next-line */
      // --offset: {{ offset }};
      border-radius: 50%;
      display: block;
      width: 6px;
      height: 6px;
      position: absolute;
      bottom: 13px;
      left: 4px;
      margin: 0 0 0 -3px;
      z-index: 4;
      transition: transform .4s ease;
      background: var(--dot);
      transform: translateX(var(--offset));
    }
}

@keyframes high {
    0% {
        transform: rotate(0deg) scale(.94);
    }
    33% {
        transform: rotate(calc(var(--d) * 10deg));
    }
    66% {
        transform: rotate(calc(var(--d) * 10deg)) translateY(-1px);
    }
    100% {
        transform: rotate(0deg) scale(1) translateY(-1px);
    }
}

@keyframes down {
    0% {
        transform: rotate(0deg) scale(1) translateY(-1px);
    }
    33% {
        transform: rotate(calc(var(--d) * 10deg));
    }
    66% {
        transform: rotate(calc(var(--d) * 10deg)) translateY(0);
    }
    100% {
        transform: rotate(0deg) scale(.94) translateY(0);
    }
}

</style>
