import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import StarRateIcon from "@mui/icons-material/StarRate";

export default function Rewards() {
  const [data, setData] = useState();
  const [id, setId] = useState(1);
  useEffect(() => {
    fetch(process.env.REACT_APP_BASE_API + `rewards/${id}?populate=*`)
      .then((res) => res.json())
      .then((data) => setData(data.data))
      .catch((err) => console.log(err));
  }, [id]);
  const dataArray = [];
  dataArray.push(data);

  const items = dataArray?.map((e, index) => (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      backgroundColor="#d4e9e2"
      height={290}
      key={index}
    >
      <Box>
        <img
          key={index}
          src={
            process.env.REACT_APP_BASE_URL +
            e?.attributes.image.data.attributes?.url
          }
          style={{ width: "400px" }}
          alt=""
        />
      </Box>
      <Box display="flex" flexDirection="column" width="400px" gap={3}>
        <Typography variant="p" key={index} fontWeight="bold" fontSize="25px">
          {e?.attributes.title}
        </Typography>
        <Typography variant="p" key={index}>
          {e?.attributes.descriptions}
        </Typography>
      </Box>
    </Box>
  ));
  return (
    <>
      <Box sx={{ backgroundColor: "#273832", py: "15px" }} width="100%">
        <Typography
          variant="p"
          sx={{ color: "white", paddingLeft: "150px", fontWeight: "bold" }}
        >
          STARBUCKS® REWARDS
        </Typography>
      </Box>
      <Box
        display="flex"
        flexDirection="row"
        sx={{
          backgroundColor: "#d9e8e2",
          backgroundImage: "url(./assets/xl-hero-desktop_2021.webp)",
          backgroundPosition: "50% center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "150%",
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          px={5}
          gap={3}
          height={600}
        >
          <Typography variant="h4" fontWeight="bold">
            FREE COFFEE
            <br /> IS A TAP AWAY
          </Typography>
          <Typography variant="p">
            Join now to start earning Rewards.
          </Typography>
          <Button
            href="/join"
            variant="contained"
            sx={{
              backgroundColor: "#326240",
              borderRadius: "50px",
              width: "50%",
            }}
          >
            Join now
          </Button>
        </Box>
      </Box>
      <Box py={15}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          gap={4}
        >
          <Typography variant="p" fontWeight="bold" fontSize={25}>
            Getting started is easy
          </Typography>
          <Typography variant="p">
            Earn Stars and get rewarded in a few easy steps.
          </Typography>
        </Box>
        <Box display="flex" justifyContent="center" gap={8} m={8}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap={3}
          >
            <Typography
              variant="p"
              display="flex"
              justifyContent="center"
              alignItems="center"
              color="#2f5c42"
              fontSize={35}
              border="2px solid #2f5c42"
              borderRadius="50%"
              width="48px"
              height="48px"
            >
              1
            </Typography>
            <Typography
              variant="p"
              sx={{ fontSize: "18px", fontWeight: "bold" }}
            >
              Create an account
            </Typography>
            <Typography variant="p" textAlign="center">
              To get started, join now. You can also join in the app to get
              access to the full range of Starbucks® Rewards benefits.
            </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap={3}
          >
            <Typography
              variant="p"
              display="flex"
              justifyContent="center"
              alignItems="center"
              color="#2f5c42"
              fontSize={35}
              border="2px solid #2f5c42"
              borderRadius="50%"
              width="48px"
              height="48px"
            >
              2
            </Typography>
            <Typography
              variant="p"
              sx={{ fontSize: "18px", fontWeight: "bold" }}
            >
              Order and pay how you’d like
            </Typography>
            <Typography variant="p" textAlign="center">
              To get started, join now. You can also join in the app to get
              access to the full range of Starbucks® Rewards benefits.
            </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap={3}
          >
            <Typography
              variant="p"
              display="flex"
              justifyContent="center"
              alignItems="center"
              color="#2f5c42"
              fontSize={35}
              border="2px solid #2f5c42"
              borderRadius="50%"
              width="48px"
              height="48px"
            >
              3
            </Typography>
            <Typography
              variant="p"
              sx={{ fontSize: "18px", fontWeight: "bold" }}
            >
              Earn Stars, get Rewards
            </Typography>
            <Typography variant="p" textAlign="center">
              To get started, join now. You can also join in the app to get
              access to the full range of Starbucks® Rewards benefits.
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box textAlign="center" backgroundColor="#f3f7f6" pt={8}>
        <Box>
          <Typography variant="p" fontWeight="bold" fontSize="25px">
            Get your favorites for free
          </Typography>
        </Box>
        <Box display="flex" gap={5} justifyContent="center" pt={5}>
          <Button
            onClick={() => {
              setId(1);
            }}
            sx={{
              fontSize: "25px",
              fontWeight: "bold",
              color: "black",
            }}
          >
            25
            <StarRateIcon sx={{ color: "#c0a364", fontSize: "16px" }} />
          </Button>
          <Button
            onClick={() => {
              setId(2);
            }}
            sx={{
              fontSize: "25px",
              fontWeight: "bold",
              color: "black",
            }}
          >
            100
            <StarRateIcon sx={{ color: "#c0a364", fontSize: "16px" }} />
          </Button>
          <Button
            onClick={() => {
              setId(3);
            }}
            sx={{
              fontSize: "25px",
              fontWeight: "bold",
              color: "black",
            }}
          >
            200
            <StarRateIcon sx={{ color: "#c0a364", fontSize: "16px" }} />
          </Button>
          <Button
            onClick={() => {
              setId(4);
            }}
            sx={{
              fontSize: "25px",
              fontWeight: "bold",
              color: "black",
            }}
          >
            300
            <StarRateIcon sx={{ color: "#c0a364", fontSize: "16px" }} />
          </Button>
          <Button
            onClick={() => {
              setId(5);
            }}
            sx={{
              fontSize: "25px",
              fontWeight: "bold",
              color: "black",
            }}
          >
            400
            <StarRateIcon sx={{ color: "#c0a364", fontSize: "16px" }} />
          </Button>
        </Box>
      </Box>
      <Box>{data ? items : "NO DATA"}</Box>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        py={10}
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          gap={4}
        >
          <Typography variant="p" fontSize="25px" fontWeight="bold">
            Endless Extras
          </Typography>
          <Typography textAlign="center" variant="p" fontSize="17px">
            Joining Starbucks® Rewards means unlocking access to exclusive
            benefits. Say
            <br /> hello to easy ordering, tasty Rewards and—yes, free coffee.
          </Typography>
        </Box>
        <Box display="flex" justifyContent="center" gap={8} m={8}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap={3}
          >
            <img style={{ width: "112px" }} src="./assets/1.jpg" alt="" />
            <Typography
              variant="p"
              sx={{ fontSize: "18px", fontWeight: "bold" }}
            >
              Fun freebies
            </Typography>
            <Typography variant="p" textAlign="center">
              Not only can you earn free coffee, look forward to a birthday
              treat plus coffee and tea refills.
            </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap={3}
          >
            <img style={{ width: "112px" }} src="./assets/2.jpg" alt="" />
            <Typography
              variant="p"
              sx={{ fontSize: "18px", fontWeight: "bold" }}
            >
              Order & pay ahead
            </Typography>
            <Typography variant="p" textAlign="center">
              Enjoy the convenience of in-store, curbside or drive-thru pickup
              at select stores.
            </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap={3}
          >
            <img style={{ width: "112px" }} src="./assets/3.jpg" alt="" />
            <Typography
              variant="p"
              sx={{ fontSize: "18px", fontWeight: "bold" }}
            >
              Get to free faster
            </Typography>
            <Typography variant="p" textAlign="center">
              Earn Stars even quicker with Bonus Star challenges, Double Star
              Days and exciting games.
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box bgcolor="#f2f0eb" pt={10}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          gap={4}
        >
          <Typography variant="p" fontSize="25px" fontWeight="bold">
            Cash or card, you earn Stars
          </Typography>
          <Typography textAlign="center" variant="p" fontSize="17px">
            No matter how you pay, you can earn Stars with your morning coffee.
            Those
            <br /> Stars add up to (really delicious) Rewards.
          </Typography>
        </Box>
        <Box display="flex" flexDirection="column" px={10} pt={10}>
          <Box
            display="flex"
            flexDirection="row"
            borderBottom="1px solid lightgray"
          >
            <Box display="flex" flexDirection="column" flexGrow="1">
              <Typography variant="p" fontSize="20px" fontWeight="bold">
                1★Star per dollar
              </Typography>
              <Typography variant="p">Pay as you go</Typography>
            </Box>
            <Box display="flex" flexDirection="row" flexGrow="2" gap={3}>
              <Box display="flex" flexDirection="row" gap={3}>
                <Box>
                  <img width="112px" src="./assets/1A.png" alt="" />
                </Box>
                <Box display="flex" flexDirection="column" gap={4} width={250}>
                  <Typography variant="p" fontWeight="bold" fontSize="18px">
                    Scan and pay separately
                  </Typography>
                  <Typography variant="p">
                    Use cash or credit/debit card at the register.
                  </Typography>
                </Box>
              </Box>
              <Box display="flex" flexDirection="row" gap={3}>
                <Box>
                  <img width="112px" src="./assets/1B.png" alt="" />
                </Box>
                <Box display="flex" flexDirection="column" gap={4} width={250}>
                  <Typography variant="p" fontWeight="bold" fontSize="18px">
                    Save payment in the app
                  </Typography>
                  <Typography variant="p">
                    Check-out faster by saving a credit/debit card or PayPal to
                    your account. You’ll be able to order ahead or scan and pay
                    at the register in one step.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box display="flex" flexDirection="row" pt={10} pb={5}>
            <Box display="flex" flexDirection="column" flexGrow="1">
              <Typography variant="p" fontSize="20px" fontWeight="bold">
                2★Star per dollar
              </Typography>
              <Typography variant="p">Add funds in the app</Typography>
            </Box>
            <Box display="flex" flexDirection="row" flexGrow="2" gap={3}>
              <Box display="flex" flexDirection="row" gap={3}>
                <Box>
                  <img width="112px" src="./assets/2A.png" alt="" />
                </Box>
                <Box display="flex" flexDirection="column" gap={4} width={250}>
                  <Typography variant="p" fontWeight="bold" fontSize="18px">
                    Preload
                  </Typography>
                  <Typography variant="p">
                    To save time and earn Stars twice as fast, add money to your
                    digital Starbucks Card using any payment option. Scan and
                    pay in one step or order ahead in the app.
                  </Typography>
                </Box>
              </Box>
              <Box display="flex" flexDirection="row" gap={3}>
                <Box>
                  <img width="112px" src="./assets/2B.png" alt="" />
                </Box>
                <Box display="flex" flexDirection="column" gap={4} width={250}>
                  <Typography variant="p" fontWeight="bold" fontSize="18px">
                    Register your gift card
                  </Typography>
                  <Typography variant="p">
                    Then use it to pay through the app. You can even consolidate
                    balances from multiple cards in one place.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          backgroundImage: "url(./assets/844262945b2a8b8cfb293156e2583872.png)",
          backgroundPosition: "cover",
          backgroundRepeat: "no-repeat",
          padding: "30px",
        }}
      >
        <Box bgcolor="#d9e8e2" display="flex" flexDirection="row">
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            mx={10}
          >
            <img
              width="224px"
              src="./assets/7997fb008f368630d3ca3c1194fd8404.svg"
              alt=""
            />
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap={3}
            py={5}
          >
            <Typography
              variant="p"
              color="initial"
              fontWeight="bold"
              fontSize="25px"
            >
              Keep the Rewards Coming
            </Typography>
            <Typography variant="p" color="initial" textAlign="center">
              The Rewards don't stop at your morning coffee. Join Starbucks®
              Rewards and unlock perks from our partners, all while earning more
              Stars.
            </Typography>
            <img width="195px" src="./assets/delta-skymiles.png" alt="" />
            <Typography variant="p" color="initial" textAlign="center">
              Link your Delta SkyMiles® and Starbucks® Rewards accounts to earn
              1 mile per $1* spent at Starbucks and double Stars on Delta travel
              days.
            </Typography>
            <Button
              href="/join"
              variant="contained"
              sx={{ backgroundColor: "#00754A", borderRadius: "50px" }}
            >
              Join StarBucks Rewards
            </Button>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            mx={10}
          >
            <img
              width="224px"
              src="./assets/b7e1b20df72e802cb1cf0e97e8fe21d0.svg"
              alt=""
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}
