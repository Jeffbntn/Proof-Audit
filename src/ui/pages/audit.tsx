import React from "react";
import { Flex, Text, Container, Box, Icon, ContentWrapper } from "ui/atoms";
import { Page, TextBox, Button, Table } from "ui/molecules";
import { COLORS } from "config/colors";
import Icons from "assets/icons";
import { connect } from "react-redux";
import { changeTheme } from "redux/actions/theme";
import useWindowDimensions from "hooks/useWindowDimensions";
import { WINDOW_SIZES } from "config/dimensions";
import { changeAuditModalOpened } from "redux/actions/requestAuditModal";
// import contractData from "assets/json/contracts.json";

const Audit = (props: any) => {
  const { deviceWidth } = useWindowDimensions();
  return (
    <Page>
      <ContentWrapper backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}>
        <Container>
          <Box padding={90}></Box>
          <Box paddingHorizontal={20} paddingVertical={50}>
            <Flex flexDirection="column" alignItems="center" gap={20}>
              <Text center type="sublogo" fontWeight={600}>
                Industry Leading Web3 Auditor
              </Text>
              <Text center type="subtitle">
                Accelerating the security of Web3
              </Text>
              <Box padding={20}>
                <Button
                  backgroundColor={COLORS.DARK_THEME_BUTTON_BLUE}
                  backgroundHoverColor={COLORS.DROPDOWN_HOVER}
                  onClick={() => {
                    props.changeAuditModalOpened(!props.auditModalOpened);
                  }}
                >
                  Request An Audit
                </Button>
              </Box>
            </Flex>
          </Box>
        </Container>
      </ContentWrapper>
      <ContentWrapper backgroundColor={COLORS.DARK_THEME_GREY_BACKGROUND}>
        <Container>
          <Box paddingHorizontal={20} paddingVertical={30}>
            <Flex flexDirection="column" alignItems="center" gap={20}>
              <Text
                center
                type={
                  deviceWidth > WINDOW_SIZES.SIZE_1280 ? "paragraph" : "sublogo"
                }
                fontWeight={600}
              >
                SUPPORTED CHAINS
              </Text>
              <Box padding={3}></Box>
              <Flex
                gap={30}
                justifyContent="center"
                flexDirection={
                  deviceWidth > WINDOW_SIZES.SIZE_1280 ? "row" : "column"
                }
              >
                <Icon icon={Icons.ethereum} size="EXTRA_SUPER_LARGE"></Icon>
                <Icon icon={Icons.bnb} size="EXTRA_SUPER_LARGE"></Icon>
                <Icon icon={Icons.polygon} size="EXTRA_SUPER_LARGE"></Icon>
                <Icon icon={Icons.tron} size="EXTRA_SUPER_LARGE"></Icon>
                <Icon icon={Icons.avalanche} size="EXTRA_SUPER_LARGE"></Icon>
              </Flex>
            </Flex>
          </Box>
        </Container>
      </ContentWrapper>
      <ContentWrapper backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}>
        <Container>
          <Box padding={30}></Box>
          <Box paddingHorizontal={20} paddingVertical={50}>
            <Flex flexDirection="column" alignItems="center" gap={20}>
              <Text center type="sublogo" fontWeight={600}>
                Explore Our Services
              </Text>
              <Box padding={10}></Box>
              <Flex
                gap={30}
                flexDirection={
                  deviceWidth > WINDOW_SIZES.SIZE_1280 ? "row" : "column"
                }
              >
                <TextBox
                  title="Avoid erros"
                  titleColor={COLORS.DARK_THEME_WHITE}
                  content="Reduce the risk of vulnerabilities and flaws in your smart contracts through a thorough, peer-reviewed line-by-line code examination."
                  icon
                />
                <TextBox
                  title="DApp Audit"
                  titleColor={COLORS.DARK_THEME_WHITE}
                  content="Protect your decentralized applications from hacks, exploits and front-running attacks  with our best-in-class auditing methods"
                  icon
                />
                <TextBox
                  title="NFT Audit"
                  titleColor={COLORS.DARK_THEME_WHITE}
                  content="Secure and optimize your Non Fungible Tokens, mitigating weaknesses and making them unsusceptible to non-functionality."
                  icon
                />
              </Flex>
            </Flex>
          </Box>
        </Container>
      </ContentWrapper>
      <ContentWrapper backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND_DARK}>
        <Container>
          <Table />
        </Container>
      </ContentWrapper>
      <ContentWrapper backgroundColor={COLORS.DARK_THEME_GRAY_BACKGROUND}>
        <Container>
          <Box padding={30}></Box>
          <Box paddingHorizontal={20} paddingVertical={50}>
            <Flex flexDirection="column" alignItems="center" gap={20}>
              <Text center type="sublogo" fontWeight={600}>
                Does your Web3 project need a Proof Audit?
              </Text>
              <Box padding={20}>
                <Button
                  backgroundColor={COLORS.DARK_THEME_BUTTON_BLUE}
                  backgroundHoverColor={COLORS.DROPDOWN_HOVER}
                  onClick={() => {
                    props.changeAuditModalOpened(!props.auditModalOpened);
                  }}
                >
                  Request An Audit
                </Button>
              </Box>
            </Flex>
          </Box>
        </Container>
      </ContentWrapper>
    </Page>
  );
};

const mapStateToProps = (state: any) => {
  return {
    theme: state.ThemeReducer.theme,
    requestAuditModal: state.RequestAuditModalReducer.auditModalOpened
  };
};

export default connect(
  mapStateToProps,
  { changeTheme: changeTheme, changeAuditModalOpened: changeAuditModalOpened }
)(Audit);
