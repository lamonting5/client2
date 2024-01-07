import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./SubNav.module.css";
import Search from "../Search/Search.jsx";
const SubNav = () => {
  const { pathname } = useLocation();

  return (
    <Box w="100%" h={"50px"} bgColor={"#525050"} className={styles.nav}>
      <Box className={styles.wrapper}>
        <ul className={styles.navLink}>
          {/*sale*/}
          <li>
            <Flex
                transform={"skew(-10deg)"}
                alignItems={"center"}
                w="80px"
                justifyContent={"center"}
                bgColor={"#d01345"}
                color={"white"}
                _hover={{ bgColor: "white", color: "black" }}
                mr="10px"
                h="49px"
            >
              <Link className={styles.Link} to={"/"}><Text
                  transform={"skew(10deg)"}
                  _hover={{ transform: "skew(0deg)" }}
              >
                Sale
              </Text>
              </Link>

            </Flex>
            <Box className={styles.megaBox}>
              <Box className={styles.content}>
                <div className={styles.row}>
                  <header><b>SHOP BY PRODUCTS</b></header>
                  <ul className={styles.megaLinks}>
                    <li><a href="#">SALE View all</a></li>
                    <li><a href="#">SALE New Added </a></li>
                    {/*<li><Link to={'#'}>SALE Selling fast</Link></li>*/}
                    <li><a href="#">SALE Dresses</a></li>
                    <li><Link to={"#"}>SALE Top</Link></li>
                    <li><Link to={'#'}>SALE Shoes</Link></li>
                  </ul>
                </div>

                <div className={styles.row2}>
                  <header>Trending</header>
                  <div className={styles.lPImage}>
                    <img
                        src="/images/product/ao1.jpg"
                        alt=""
                    />
                    <img
                        src="/images/product/ao2.jpg"
                        alt=""
                    />
                    <img
                        src="/images/product/ao3.jpg"
                        alt=""
                    />
                  </div>
                </div>
              </Box>
            </Box>
          </li>
          {/*/women*/}
          <li>
            <Flex
                color={"white"}
                _hover={{ bgColor: "white", color: "black" }}
                alignItems={"center"}
                w="80px"
                justifyContent={"center"}
                h="49px"
            >
              <Link className={styles.Link} to="/products/women">
                <Text>Nữ</Text>
              </Link>
            </Flex>
            <div className={styles.megaBox}>
              <div className={styles.content}>
                <div className={styles.row}>
                  <header>
                    <b>SHOP BY PRODUCTS</b>
                  </header>
                  <ul className={styles.megaLinks}>
                    <li><Link to={'/'}>New in</Link></li>
                    <li><Link to={'/'}>T-Shirts</Link></li>
                    <li><Link to={'/'}>Jeans</Link></li>
                    <li><Link to={'/'}>Trousers</Link></li>

                  </ul>
                </div>
                <div className={styles.row}>
                  <ul className={styles.megaLinks}>
                    <header>...</header>
                    <li><Link to={'/'}>Jacket</Link></li>
                    <li><Link to={'/'}>Short</Link></li>
                    <li><Link to={'/'}>Underwear</Link></li>
                  </ul>
                </div>

                <div className={styles.row}>
                  <header>
                    <b>SHOP BESTSELLERS</b>
                  </header>
                  <div className={styles.shopList}>
                    <div>

                      <img
                          src="/images/product/ao2.jpg"
                          alt=""
                      />
                      <p></p>
                    </div>
                    <div>
                      <img
                          src="/images/product/ao2.jpg"
                          alt=""
                      />
                      <p></p>
                    </div>
                    <div>
                      <img
                          src="/images/product/ao2.jpg"
                          alt=""
                      />
                      <p></p>
                    </div>
                    <div>
                      <img
                          src="/images/product/ao2.jpg"
                          alt=""
                      />
                      <p></p>
                    </div>
                    <div>
                      <img
                          src="/images/product/ao2.jpg"
                          alt=""
                      />
                      <p></p>
                    </div>
                  </div>
                </div>
                <div className={styles.row}>
                  <header>
                    <b>SHOP BY EDIT</b>
                  </header>
                  <div className={styles.shopList}>
                    <div>

                      <img
                          src="/images/product/ao1.jpg"
                          alt=""
                      />
                      <p></p>
                    </div>
                    <div>
                      <img
                          src="/images/product/ao1.jpg"
                          alt=""
                      />
                      <p></p>
                    </div>
                    <div>
                      <img
                          src="/images/product/ao1.jpg"
                          alt=""
                      />
                      <p></p>
                    </div>
                    <div>
                      <img
                          src="/images/product/ao1.jpg"
                          alt=""
                      />
                      <p></p>
                    </div>
                    <div>
                      <img
                          src="/images/product/ao1.jpg"
                          alt=""
                      />
                      <p></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          {/*men*/}
          <li>
            <Flex
                color={"white"}
                _hover={{ bgColor: "white", color: "black" }}
                alignItems={"center"}
                w="80px"
                justifyContent={"center"}
                h="49px"
            >
              <Link className={styles.Link} to="/products/men">
                <Text>Nam</Text>
              </Link>
            </Flex>
            <div className={styles.megaBox}>
              <div className={styles.content}>
                <div className={styles.row}>
                  <header>
                    <b>SHOP BY PRODUCTS</b>
                  </header>
                  <ul className={styles.megaLinks}>
                    <li><Link to={'/'}>New in</Link></li>
                    <li><Link to={'/'}>T-Shirts</Link></li>
                    <li><Link to={'/'}>Jeans</Link></li>
                    <li><Link to={'/'}>Trousers</Link></li>

                  </ul>
                </div>
                <div className={styles.row}>
                  <ul className={styles.megaLinks}>
                    <header>...</header>
                    <li><Link to={'/'}>Jacket</Link></li>
                    <li><Link to={'/'}>Short</Link></li>
                    <li><Link to={'/'}>Underwear</Link></li>
                  </ul>
                </div>

                <div className={styles.row}>
                  <header>
                    <b>SHOP BESTSELLERS</b>
                  </header>
                  <div className={styles.shopList}>
                    <div>

                      <img
                          src="/images/product/ao2.jpg"
                          alt=""
                      />
                      <p></p>
                    </div>
                    <div>
                      <img
                          src="/images/product/ao2.jpg"
                          alt=""
                      />
                      <p></p>
                    </div>
                    <div>
                      <img
                          src="/images/product/ao2.jpg"
                          alt=""
                      />
                      <p></p>
                    </div>
                    <div>
                      <img
                          src="/images/product/ao2.jpg"
                          alt=""
                      />
                      <p></p>
                    </div>
                    <div>
                      <img
                          src="/images/product/ao2.jpg"
                          alt=""
                      />
                      <p></p>
                    </div>
                  </div>
                </div>
                <div className={styles.row}>
                  <header>
                    <b>SHOP BY EDIT</b>
                  </header>
                  <div className={styles.shopList}>
                    <div>

                      <img
                          src="/images/product/ao1.jpg"
                          alt=""
                      />
                      <p></p>
                    </div>
                    <div>
                      <img
                          src="/images/product/ao1.jpg"
                          alt=""
                      />
                      <p></p>
                    </div>
                    <div>
                      <img
                          src="/images/product/ao1.jpg"
                          alt=""
                      />
                      <p></p>
                    </div>
                    <div>
                      <img
                          src="/images/product/ao1.jpg"
                          alt=""
                      />
                      <p></p>
                    </div>
                    <div>
                      <img
                          src="/images/product/ao1.jpg"
                          alt=""
                      />
                      <p></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          {/*unisex*/}
          <li>
            <Flex
                color={"white"}
                _hover={{ bgColor: "white", color: "black" }}
                alignItems={"center"}
                w="80px"
                justifyContent={"center"}
                h="49px"
            >
              <Link className={styles.Link} to="/">
                <Text>Unisex</Text>
              </Link>
            </Flex>

            <Box className={styles.megaBox}>
              <Box className={styles.content}>
                <div className={styles.row}>
                  <header><b>SHOP BY PRODUCTS</b></header>
                  <ul className={styles.megaLinks}>
                    <li><a href="#">SALE View all</a></li>
                    <li><a href="#">SALE New Added </a></li>
                    {/*<li><Link to={'#'}>SALE Selling fast</Link></li>*/}
                    <li><a href="#">SALE Dresses</a></li>
                    <li><Link to={"#"}>SALE Top</Link></li>
                    <li><Link to={'#'}>SALE Shoes</Link></li>
                  </ul>
                </div>

                <div className={styles.row2}>
                  <header>Trending</header>
                  <div className={styles.lPImage}>
                    <img
                        src="/images/product/ao1.jpg"
                        alt=""
                    />
                    <img
                        src="/images/product/ao2.jpg"
                        alt=""
                    />
                    <img
                        src="/images/product/ao3.jpg"
                        alt=""
                    />
                  </div>
                </div>
              </Box>
            </Box>
          </li>
          {/*kids*/}
          <li>
            <Flex
                color={"white"}
                _hover={{ bgColor: "white", color: "black" }}
                alignItems={"center"}
                w="80px"
                justifyContent={"center"}
                h="49px"
            >
              <Link className={styles.Link} to="/products/kid">
                <Text>Trẻ em</Text>
              </Link>
            </Flex>
            <div className={styles.megaBox}>
              <div className={styles.content}>
                <div className={styles.row}>
                  <header>
                    <b>SHOP BY PRODUCTS</b>
                  </header>
                  <ul className={styles.megaLinks}>
                    <li><Link to={'/'}>New in</Link></li>
                    <li><Link to={'/'}>T-Shirts</Link></li>
                    <li><Link to={'/'}>Jeans</Link></li>
                    <li><Link to={'/'}>Trousers</Link></li>

                  </ul>
                </div>
                <div className={styles.row}>
                  <ul className={styles.megaLinks}>
                    <header>...</header>
                    <li><Link to={'/'}>Jacket</Link></li>
                    <li><Link to={'/'}>Short</Link></li>
                    <li><Link to={'/'}>Underwear</Link></li>
                  </ul>
                </div>

                <div className={styles.row}>
                  <header>
                    <b>SHOP BESTSELLERS</b>
                  </header>
                  <div className={styles.shopList}>
                    <div>

                      <img
                          src="/images/product/ao2.jpg"
                          alt=""
                      />
                      <p></p>
                    </div>
                    <div>
                      <img
                          src="/images/product/ao2.jpg"
                          alt=""
                      />
                      <p></p>
                    </div>
                    <div>
                      <img
                          src="/images/product/ao2.jpg"
                          alt=""
                      />
                      <p></p>
                    </div>
                    <div>
                      <img
                          src="/images/product/ao2.jpg"
                          alt=""
                      />
                      <p></p>
                    </div>
                    <div>
                      <img
                          src="/images/product/ao2.jpg"
                          alt=""
                      />
                      <p></p>
                    </div>
                  </div>
                </div>
                <div className={styles.row}>
                  <header>
                    <b>SHOP BY EDIT</b>
                  </header>
                  <div className={styles.shopList}>
                    <div>

                      <img
                          src="/images/product/ao1.jpg"
                          alt=""
                      />
                      <p></p>
                    </div>
                    <div>
                      <img
                          src="/images/product/ao1.jpg"
                          alt=""
                      />
                      <p></p>
                    </div>
                    <div>
                      <img
                          src="/images/product/ao1.jpg"
                          alt=""
                      />
                      <p></p>
                    </div>
                    <div>
                      <img
                          src="/images/product/ao1.jpg"
                          alt=""
                      />
                      <p></p>
                    </div>
                    <div>
                      <img
                          src="/images/product/ao1.jpg"
                          alt=""
                      />
                      <p></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </Box>
      <Search/>
    </Box>
  );
};

export default SubNav;
