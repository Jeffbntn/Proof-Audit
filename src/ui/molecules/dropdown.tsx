import React, { useState } from "react";
import { Box, Flex, Text, Grid, GridItem, Icon } from "ui/atoms";
import { SearchInput, Button } from "ui/molecules";
import { COLORS } from "config/colors";
import Icons from "assets/icons";
import { Z_INDEX_LEVELS } from "config/dimensions";

interface IDataProps {
  title: string;
  amount: number;
}

interface IDropDownProps {
  data?: Array<IDataProps>;
  direction?: "left" | "right";
  top?: number | "auto";
  border?: boolean;
  title?: string;
  menuWidth?: number;
}

const DropDown: React.FC<IDropDownProps> = ({
  data = [],
  direction = "left",
  top = -12,
  border = false,
  title = "Category",
  menuWidth = 260
}) => {
  const [selectedItems, setSelectedItems] = useState<Array<IDataProps>>(data);
  const [collapsed, setCollapsed] = useState<boolean>(true);
  return (
    <Box
      position="absolute"
      left={direction === "left" ? 0 : "auto"}
      top={top}
      right={direction === "right" ? 0 : "auto"}
      zIndex={Z_INDEX_LEVELS.MAXIMUM}
      paddingVertical={1}
    >
      <Box position="relative" width={menuWidth}>
        <Box
          paddingVertical={11}
          paddingHorizontal={5}
          borderColor={COLORS.WHITE}
          borderWidth={border ? 1 : 0}
          borderRadius={15}
          cursor
          width={100}
          onClick={() => {
            setCollapsed(!collapsed);
          }}
          onMouseEnter={() => {
            setCollapsed(false);
          }}
          onMouseLeave={() => {
            setCollapsed(true);
          }}
        >
          <Flex gap={menuWidth >= 300 ? 15 : 5} justifyContent="flex-start">
            <Flex justifyContent="space-around" gap={10}>
              <Text type="plain" fontWeight={600} color={COLORS.DARK_THEME_WHITE}>
                {title}
              </Text>
              {selectedItems.length > 0 && (
                // <Box
                //   width={18}
                //   height={18}
                //   paddingVertical={1}
                //   backgroundColor={COLORS.GRAY_DARK}
                //   borderRadius={5}
                // >
                //   <Flex justifyContent="center" alignItems="center">
                //     <Text color={COLORS.WHITE} type="plain" fontWeight={600}>
                //       {selectedItems.length < 9 ? selectedItems.length : "9+"}
                //     </Text>
                //   </Flex>
                // </Box>
                <></>
              )}
            </Flex>
            <Icon icon={Icons.dropdown} />
          </Flex>
        </Box>
        <Box
          paddingVertical={10}
          onMouseEnter={() => {
            setCollapsed(false);
          }}
          onMouseLeave={() => {
            setCollapsed(true);
          }}
        />
        {/* {!collapsed && (
          <Box paddingHorizontal={30} marginTop={-5}>
            <Icon icon={Icons.up} />
          </Box>
        )} */}
        {!collapsed && (
          <Box
            padding={20}
            marginTop={-5}
            backgroundColor={COLORS.DARK_THEME_BLACK}
            borderRadius={15}
            borderColor={COLORS.GREY}
            borderWidth={2}
            zIndex={Z_INDEX_LEVELS.MAXIMUM}
            onMouseEnter={() => {
              setCollapsed(false);
            }}
            onMouseLeave={() => {
              setCollapsed(true);
            }}
          >
            <SearchInput size="small" placeholder="Input category here" />
            <Box>
              <Box paddingVertical={5} />
              <Box paddingVertical={15}>
                <Text color={COLORS.GRAY_DARK} type="paragraph">
                  {title}
                </Text>
              </Box>{" "}
              <Box overflowY="scroll" maxHeight={500} paddingHorizontal={10}>
                <Grid gap={13}>
                  {data.map((dataItem, index) => {
                    return (
                      <GridItem columns={12} key={index}>
                        <Flex justifyContent="space-between">
                          <Text type="plain">{dataItem.title}</Text>
                          <Box
                            paddingHorizontal={6}
                            paddingVertical={2}
                            backgroundColor={COLORS.GREY}
                            borderRadius={5}
                          >
                            <Text type="plain" color={COLORS.DARK_THEME_BLACK}>{dataItem.amount}</Text>
                          </Box>
                        </Flex>
                      </GridItem>
                    );
                  })}
                </Grid>
              </Box>
              <Box>
                <Box
                  paddingVertical={5}
                  borderBottomWidth={1}
                  borderColor={COLORS.GRAY}
                />
                <Box paddingVertical={5} />
                <Button
                  backgroundColor={COLORS.TYPICAL_BLUE}
                  backgroundHoverColor={COLORS.DROPDOWN_HOVER}
                  onClick={() => {
                    setSelectedItems([]);
                  }}
                >
                  Clear Filters
                </Button>
              </Box>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default DropDown;
