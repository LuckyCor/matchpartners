<template>
  <div id="teamCardList">
    <van-card
      v-for="team in props.teamList"
      :desc="team.description"
      thumb="https://gd-hbimg.huaban.com/c622832a18305db13d5dfa1281406ce8e589c2445b9d-ANpryC_fw658"
      :title="`${team.name} `"
    >
      <template #tags>
        <van-tag plain type="danger" style="margin-right: 8px; margin-top: 8px">
          {{ teamStatusEnum[team.status] }}
        </van-tag>
      </template>
      <template #bottom>
        <div>
          {{ '队伍人数:'+ team.hasJoinNum +'/'+team.maxNum}}
        </div>
        <div v-if="team.expireTime">
          {{ "过期时间" + team.expireTime }}
        </div>
        <div>
          {{ "创建时间" + team.createTime }}
        </div>
      </template>
      <template #footer>
        <van-button
          size="mini"
          plain
          type="primary"
          v-if="team.userId !== currentUser?.id && !team.hasJoin"
          @click="doJoinTeam(team)"
          >加入队伍</van-button
        >
        <van-button
          v-if="team.userId === currentUser?.id"
          size="mini"
          plain
          type="primary"
          @click="doUpdateTeam(team.id)"
        >
          更新队伍
        </van-button>
        <van-button
          v-if="team.userId !== currentUser?.id && team.hasJoin"
          size="mini"
          plain
          type="primary"
          @click="doQuitTeam(team.id)"
          >退出队伍</van-button
        >
        <van-button
          v-if="team.userId === currentUser?.id"
          size="mini"
          plain
          type="danger"
          @click="doDeleteTeam(team.id)"
          >解散队伍</van-button
        >
      </template>
    </van-card>
  </div>
</template>

<script setup lang="ts">
import { TeamType } from "../models/team";
import { teamStatusEnum } from "../constants/team";
import myAxios from "../plugins/myAxios";
import { Toast } from "@vant/compat";
import { onMounted, ref } from "vue";
import { getCurrentUser } from "../services/user";
import { useRouter } from "vue-router";
const showPasswordDialog = ref(false);
const password = ref("");
const joinTeamId = ref(0);
const currentUser = ref();
// const VanDialog = Dialog.Component;
const router = useRouter();
onMounted(async () => {
  currentUser.value = await getCurrentUser();
});
const preJoinTeam = (team: TeamType) => {
  joinTeamId.value = team.id;
  if (team.status === 0) {
    doJoinTeam();
  } else {
    showPasswordDialog.value = true;
  }
};
const doJoinCancel = () => {
  joinTeamId.value = 0;
  password.value = "";
};

interface TeamCardListProps {
  teamList: TeamType[];
}
const props = withDefaults(defineProps<TeamCardListProps>(), {
  //@ts-ignore
  teamList: [] as TeamType[],
});

//队伍列表加入队伍
const doJoinTeam = async () => {
  if (!joinTeamId.value) {
    return;
  }
  const res = await myAxios.post("/team/join", {
    teamId: doJoinTeam.value,
    password: password.value,
  });
  if (res?.code === 0) {
    Toast.success("加入成功");
  } else {
    Toast.fail("加入失败" + (res.description ? `, ${res.description} ` : ''));
  }
};
//更新队伍列表
const doUpdateTeam = (id: number) => {
  router.push({
    path: "/team/update",
    query: {
      id,
    },
  });
};
/**
 * 退出队伍
 * @param id
 */
const doQuitTeam = async (id: number) => {
  const res = await myAxios.post("/team/quit", {
    teamId: id,
  });
  if (res?.code === 0) {
    Toast.success("操作成功");
  } else {
    Toast.fail("操作失败" + (res.description ? `.${res.description}` : ''));
  }
};
/**
 * 删除队伍
 */
const doDeleteTeam = async (id: number) => {
  const res = await myAxios.post("/team/delete", {
    id,
  });
  if (res?.code === 0) {
    Toast.success("操作成功");
  } else {
    Toast.fail("操作失败" + (res.description ? `.${res.description}` : ''));
  }
};
</script>

<style scoped>
#teamCardList :deep(.van-image__img) {
  height: 128px;
  object-fit: unset;
}
</style>
