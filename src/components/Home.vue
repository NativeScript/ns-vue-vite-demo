<script lang="ts" setup>
import type { Button, EventData } from "@nativescript/core";
import { ref, computed, onMounted, onUnmounted } from "nativescript-vue";
import { InAppBrowser } from 'nativescript-inappbrowser';

declare var com: any;
const counter = ref(0);
const message = computed(() => {
  return `Hype Counter: ${counter.value}`;
});

// HMR plugins or native platform APIs
function enterNow(evt: EventData) {
  InAppBrowser.open("https://viteconf.amsterdam");
  return;

  // You can also use native platform APIs directly
  // Try commenting above and uncommenting below to see it in action
  const url = "https://viteconf.amsterdam";
  if (__APPLE__) {
    const nsUrl = NSURL.URLWithString(url);
    const app = UIApplication.sharedApplication;
    app.openURLOptionsCompletionHandler(nsUrl, NSDictionary.new(), (success: boolean) => {
      // Handle success or failure
    });
  } else {
    const nativeApp = com.tns.NativeScriptApplication.getInstance();
    const context =
      nativeApp.getApplicationContext() as android.content.Context;
    const intent = new android.content.Intent(
      android.content.Intent.ACTION_VIEW,
      android.net.Uri.parse(url.trim())
    );
    intent.addFlags(android.content.Intent.FLAG_ACTIVITY_NEW_TASK);
    context.startActivity(intent);
  }
}

let interval: any;
onMounted(() => {
  console.log("mounted");
  interval = setInterval(() => counter.value++, 20);
});

onUnmounted(() => {
  console.log("unmounted");
  clearInterval(interval);
});
</script>

<template>
  <Frame>
    <Page class="bg-[#251353]" statusBarStyle="light">
      <ActionBar>
        <Label text="ViteConf 2025" class="font-bold text-lg" />
      </ActionBar>

      <GridLayout rows="auto, *">
        <ImageCacheIt
          src="https://media.licdn.com/dms/image/v2/D4E12AQGNN12uyxHB9A/article-cover_image-shrink_720_1280/B4EZenL8YRHsAI-/0/1750856620336?e=2147483647&v=beta&t=9X5KA3DAJsHnQ1BE26Qeduzg6HNoPKeQf5GwZNOIoSU"
          stretch="aspectFill"
          class="h-60 align-top"
        />
        <GridLayout row="1" rows="*,auto,*" class="gradient-purple p-6">
          <Label
            class="text-xl align-middle text-center text-[#77c9fa] font-bold"
            :text="message"
          />

          <Button
            row="1"
            @tap="enterNow"
            class="p-6 text-white font-bold border-4 border-[#77c9fa] rounded-lg text-xl gradient-light-purple"
            horizontalAlignment="center"
          >
            Enter Now
          </Button>
        </GridLayout>
      </GridLayout>
    </Page>
  </Frame>
</template>
