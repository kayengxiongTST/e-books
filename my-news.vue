<template>
    <v-card flat class="mt-5 mx-auto" max-width="1200">
            <v-card-title>Adipisicing commodo</v-card-title>
            <v-card-text>
                Adipisicing commodo quis non elit ullamco incididunt dolor Lorem
                ut ad voluptate. Ad veniam non excepteur aute sint ipsum elit
                excepteur elit in et.
            </v-card-text>
            <v-slide-group show-arrows>
                <v-slide-item
                    v-for="n in 3"
                    :key="n"
                    v-slot="{ active, toggle }"
                >
                    <v-btn
                        class="mx-2"
                        :input-value="active"
                        active-class="purple white--text"
                        depressed
                        rounded
                        @click="toggle"
                    >
                        Options {{ n }}
                    </v-btn>
                </v-slide-item>
            </v-slide-group>
            <v-card-text>
                <v-row>
                    <v-col cols="12" md="8">
                        <v-row>
                            <v-col v-for="i in 2" :key="i" cols="12">
                                <v-card flat>
                                    <v-row>
                                        <v-col cols="12" md="3">
                                            <v-img
                                                src="https://picsum.photos/100/100"
                                            ></v-img>
                                        </v-col>
                                        <v-col cols="12" md="9">
                                            <v-card-title class="pt-0">
                                                Magna Lorem Lorem
                                            </v-card-title>
                                            <v-card-subtitle>
                                                Magna Lorem Lorem nisi quis enim
                                                sit ut. Lorem Lorem aute ex ex
                                            </v-card-subtitle>
                                            <v-card-text>
                                                Magna Lorem Lorem nisi quis enim
                                                sit ut. Lorem Lorem aute ex ex
                                                laborum labore aute anim aute
                                                nisi laboris adipisicing id non.
                                                Amet sint do pariatur qui nulla
                                                aute.
                                            </v-card-text>
                                        </v-col>
                                    </v-row>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-col>
                    <v-col cols="12" md="2">
                        <div>
                            <v-card flat>
                                <v-card-text> Magna Lorem Lorem 1 </v-card-text>
                            </v-card>
                        </div>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
</template>
